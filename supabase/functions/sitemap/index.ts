import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    console.log('Generating sitemap XML...');

    // Fetch active URLs from sitemap_urls table
    const { data: urls, error } = await supabase
      .from('sitemap_urls')
      .select('*')
      .eq('is_active', true)
      .order('priority', { ascending: false });

    if (error) {
      console.error('Error fetching sitemap URLs:', error);
      throw error;
    }

    // Fetch published blog posts
    const { data: blogPosts, error: blogError } = await supabase
      .from('blog_posts')
      .select('slug, updated_at')
      .eq('status', 'published')
      .order('updated_at', { ascending: false });

    if (blogError) {
      console.error('Error fetching blog posts:', blogError);
    }

    // Generate sitemap XML
    const baseUrl = 'https://www.sosmaridodealuguelbh.com.br';
    
    let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add URLs from sitemap_urls table
    const currentDate = new Date().toISOString().split('T')[0];
    
    for (const urlData of urls || []) {
      // Use current date for dynamic content, original date for static pages
      const lastMod = urlData.url_type === 'static' 
        ? new Date(urlData.last_modified).toISOString().split('T')[0]
        : currentDate;
      
      sitemapXML += `
  <url>
    <loc>${baseUrl}${urlData.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${urlData.change_frequency}</changefreq>
    <priority>${urlData.priority}</priority>
  </url>`;
    }

    // Add blog posts that might not be in sitemap_urls yet
    const currentDate = new Date().toISOString().split('T')[0];
    
    if (blogPosts) {
      for (const post of blogPosts) {
        const blogUrl = `/blog/${post.slug}`;
        const existsInSitemap = urls?.some(url => url.url === blogUrl);
        
        if (!existsInSitemap) {
          // Use current date for blog posts
          const lastMod = currentDate;
          
          sitemapXML += `
  <url>
    <loc>${baseUrl}${blogUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

          // Add to sitemap_urls table for future use
          await supabase
            .from('sitemap_urls')
            .upsert({
              url: blogUrl,
              url_type: 'blog',
              priority: 0.8,
              change_frequency: 'weekly',
              last_modified: new Date().toISOString()
            });
        }
      }
    }

    sitemapXML += `
</urlset>`;

    console.log(`Generated sitemap with ${(urls?.length || 0) + (blogPosts?.length || 0)} URLs`);

    // Log sitemap generation
    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'sitemap-generation',
        status: 'success',
        message: `Sitemap generated successfully with ${(urls?.length || 0) + (blogPosts?.length || 0)} URLs`,
        data: { 
          urls_count: urls?.length || 0,
          blog_posts_count: blogPosts?.length || 0,
          total_size: sitemapXML.length 
        }
      });

    // Return XML with proper content type
    return new Response(sitemapXML, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Log error
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!
    );
    
    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'sitemap-generation',
        status: 'error',
        message: `Error generating sitemap: ${error.message}`,
        data: { error: error.message }
      });

    return new Response('Error generating sitemap', {
      status: 500,
      headers: corsHeaders,
    });
  }
});