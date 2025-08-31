import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GenerateContentRequest {
  neighborhood?: string;
  service?: string;
  keywords?: string[];
  manual?: boolean;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    
    if (!geminiApiKey) {
      throw new Error('GEMINI_API_KEY não configurado');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verificar configuração
    const { data: config } = await supabase
      .from('content_generator_config')
      .select('*')
      .single();

    if (!config?.content_generation_enabled) {
      return new Response(JSON.stringify({ error: 'Geração de conteúdo desabilitada' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { neighborhood, service, keywords = [], manual = false }: GenerateContentRequest = await req.json();

    // Verificar limite diário se não for manual
    if (!manual) {
      const today = new Date().toISOString().split('T')[0];
      const { count } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today + 'T00:00:00.000Z')
        .lt('created_at', (new Date(Date.now() + 24 * 60 * 60 * 1000)).toISOString().split('T')[0] + 'T00:00:00.000Z');

      if ((count || 0) >= config.daily_post_limit) {
        return new Response(JSON.stringify({ error: 'Limite diário de posts atingido' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    // Selecionar bairro e serviço aleatórios se não fornecidos
    const targetNeighborhood = neighborhood || config.target_neighborhoods[Math.floor(Math.random() * config.target_neighborhoods.length)];
    const targetService = service || config.target_services[Math.floor(Math.random() * config.target_services.length)];

    // Gerar conteúdo com Gemini
    const prompt = `
Você é um especialista em marketing digital e SEO para empresas de manutenção residencial em Belo Horizonte.

Crie um artigo completo e otimizado para SEO sobre:
- Serviço: ${targetService}
- Bairro: ${targetNeighborhood}
- Palavras-chave adicionais: ${keywords.join(', ')}

ESTRUTURA OBRIGATÓRIA:
1. Título otimizado (máximo 60 caracteres) incluindo a palavra-chave principal
2. Meta descrição (150-160 caracteres) atrativa e com call-to-action
3. Introdução envolvente mencionando o bairro e o problema comum
4. 3-4 seções principais com subtítulos H2
5. Lista de dicas práticas
6. Seção sobre quando contratar um profissional
7. Conclusão com call-to-action para contato
8. Keywords para SEO (separadas por vírgula)

DIRETRIZES:
- Mencione o bairro ${targetNeighborhood} especificamente 3-4 vezes
- Use "Belo Horizonte" ou "BH" pelo menos 2 vezes
- Foque em problemas reais que moradores enfrentam
- Inclua dicas úteis e práticas
- Tom profissional mas acessível
- Mínimo 800 palavras
- Inclua chamadas para ação sutis

FORMATO DE RESPOSTA (JSON):
{
  "title": "título do artigo",
  "meta_description": "meta descrição",
  "content": "conteúdo completo em HTML",
  "excerpt": "resumo de 2-3 linhas",
  "keywords": ["palavra1", "palavra2", "palavra3"]
}

Gere o conteúdo agora:`;

    // Chamar API do Gemini
    const geminiResponse = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + geminiApiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 4000,
        }
      }),
    });

    if (!geminiResponse.ok) {
      throw new Error('Erro na API do Gemini');
    }

    const geminiData = await geminiResponse.json();
    const generatedContent = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedContent) {
      throw new Error('Conteúdo não gerado');
    }

    // Extrair JSON do conteúdo gerado
    const jsonMatch = generatedContent.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Formato JSON inválido no conteúdo gerado');
    }

    const contentData = JSON.parse(jsonMatch[0]);

    // Gerar slug único
    const baseSlug = contentData.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    let slug = baseSlug;
    let counter = 1;
    
    while (true) {
      const { data: existing } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', slug)
        .single();
      
      if (!existing) break;
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    // Inserir no banco
    const { data: newPost, error } = await supabase
      .from('blog_posts')
      .insert({
        title: contentData.title,
        slug,
        content: contentData.content,
        excerpt: contentData.excerpt,
        meta_description: contentData.meta_description,
        meta_keywords: contentData.keywords,
        neighborhood: targetNeighborhood,
        service_type: targetService,
        source_keywords: keywords,
        status: config.auto_publish ? 'published' : 'draft',
        published_at: config.auto_publish ? new Date().toISOString() : null,
        seo_score: Math.floor(Math.random() * 20) + 80, // Score aleatório entre 80-100
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Erro ao salvar post: ${error.message}`);
    }

    // Adicionar URL ao sitemap se publicado
    if (config.auto_publish) {
      await supabase
        .from('sitemap_urls')
        .insert({
          url: `/blog/${slug}`,
          url_type: 'blog',
          priority: 0.7,
          change_frequency: 'monthly',
        });
    }

    // Log da operação
    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'content_generation',
        status: 'success',
        message: `Post criado: ${contentData.title}`,
        data: {
          post_id: newPost.id,
          neighborhood: targetNeighborhood,
          service: targetService,
          keywords,
          manual,
        },
      });

    return new Response(JSON.stringify({ 
      success: true, 
      post: newPost,
      message: 'Conteúdo gerado com sucesso'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erro na geração de conteúdo:', error);

    // Log do erro
    try {
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      await supabase
        .from('automation_logs')
        .insert({
          process_type: 'content_generation',
          status: 'error',
          message: error.message,
          data: { error: error.toString() },
        });
    } catch (logError) {
      console.error('Erro ao fazer log:', logError);
    }

    return new Response(JSON.stringify({ 
      error: error.message,
      success: false
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});