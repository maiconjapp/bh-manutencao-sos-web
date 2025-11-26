import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Buscar todas as URLs ativas do sitemap
    const { data: urls, error } = await supabase
      .from('sitemap_urls')
      .select('*')
      .eq('is_active', true)
      .order('priority', { ascending: false });

    if (error) {
      throw new Error(`Erro ao buscar URLs: ${error.message}`);
    }

    // Buscar posts do blog publicados
    const { data: blogPosts } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    // Adicionar posts do blog às URLs se não existirem
    if (blogPosts) {
      for (const post of blogPosts) {
        const blogUrl = `/blog/${post.slug}`;
        const existingUrl = urls?.find(u => u.url === blogUrl);
        
        if (!existingUrl) {
          // Adicionar URL do post ao banco para futuras gerações
          await supabase
            .from('sitemap_urls')
            .upsert({
              url: blogUrl,
              url_type: 'blog',
              priority: 0.7,
              change_frequency: 'monthly',
              last_modified: post.updated_at || post.published_at,
            });

          // Adicionar à lista atual
          urls?.push({
            id: crypto.randomUUID(),
            url: blogUrl,
            url_type: 'blog',
            priority: 0.7,
            change_frequency: 'monthly',
            last_modified: post.updated_at || post.published_at,
            is_active: true,
            metadata: {},
            created_at: new Date().toISOString(),
          });
        }
      }
    }

    // Gerar XML do sitemap
    const baseUrl = 'https://www.sosmaridodealuguelbh.com.br';
    const currentDate = new Date().toISOString().split('T')[0];
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    for (const urlData of urls || []) {
      // Use current date for dynamic content, original date for static pages
      const lastMod = urlData.url_type === 'static' 
        ? new Date(urlData.last_modified).toISOString().split('T')[0]
        : currentDate;
      
      sitemap += `
  <url>
    <loc>${baseUrl}${urlData.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${urlData.change_frequency}</changefreq>
    <priority>${urlData.priority}</priority>
  </url>`;
    }

    sitemap += `
</urlset>`;

    // Estatísticas
    const stats = {
      total_urls: urls?.length || 0,
      static_pages: urls?.filter(u => u.url_type === 'static').length || 0,
      blog_posts: urls?.filter(u => u.url_type === 'blog').length || 0,
      neighborhoods: urls?.filter(u => u.url_type === 'neighborhood').length || 0,
      services: urls?.filter(u => u.url_type === 'service').length || 0,
      last_updated: new Date().toISOString(),
    };

    // Log da geração
    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'sitemap_generation',
        status: 'success',
        message: `Sitemap gerado com ${stats.total_urls} URLs`,
        data: stats,
      });

    // Tentar chamar a função de atualização do sitemap estático
    try {
      await fetch(`${supabaseUrl}/functions/v1/update-static-sitemap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({ sitemap, stats }),
      });
      console.log('Função update-static-sitemap chamada com sucesso');
    } catch (updateError) {
      console.error('Erro ao chamar update-static-sitemap:', updateError);
    }

    // Retornar XML ou JSON dependendo do Accept header
    const acceptHeader = req.headers.get('accept') || '';
    
    if (acceptHeader.includes('application/xml') || acceptHeader.includes('text/xml')) {
      return new Response(sitemap, {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/xml',
          'Cache-Control': 'public, max-age=3600', // Cache por 1 hora
        },
      });
    } else {
      return new Response(JSON.stringify({ 
        success: true, 
        sitemap,
        stats,
        message: 'Sitemap gerado com sucesso'
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    console.error('Erro na geração do sitemap:', error);

    return new Response(JSON.stringify({ 
      error: error.message,
      success: false
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});