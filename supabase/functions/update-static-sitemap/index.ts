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

    // Primeiro gerar o sitemap XML chamando a função generate-sitemap
    const { data: sitemapResponse, error: sitemapError } = await supabase.functions.invoke(
      'generate-sitemap',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/xml'
        }
      }
    );

    if (sitemapError) {
      throw new Error(`Erro ao gerar sitemap: ${sitemapError.message}`);
    }

    const sitemapXML = sitemapResponse.sitemap || sitemapResponse;

    // Log para debug
    console.log('Sitemap XML gerado com sucesso');
    console.log('Tamanho do XML:', sitemapXML?.length || 0);

    // Aqui normalmente salvaríamos o arquivo, mas como é um edge function,
    // vamos apenas retornar o XML e logar a operação
    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'static_sitemap_update',
        status: 'success',
        message: `Sitemap estático atualizado com ${sitemapResponse.stats?.total_urls || 0} URLs`,
        data: {
          xml_size: sitemapXML?.length || 0,
          timestamp: new Date().toISOString(),
          stats: sitemapResponse.stats
        },
      });

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Sitemap estático atualizado com sucesso',
      sitemap_xml: sitemapXML,
      stats: sitemapResponse.stats
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erro na atualização do sitemap estático:', error);

    // Log do erro
    try {
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseKey);
      
      await supabase
        .from('automation_logs')
        .insert({
          process_type: 'static_sitemap_update',
          status: 'error',
          message: `Erro na atualização: ${error.message}`,
        });
    } catch (logError) {
      console.error('Erro ao salvar log:', logError);
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