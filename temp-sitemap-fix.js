// Script para executar correção retroativa do sitemap
import { supabase } from "./src/integrations/supabase/client.js";

async function fixSitemap() {
  console.log('Executando correção retroativa do sitemap...');
  
  try {
    const { data, error } = await supabase.functions.invoke('generate-sitemap');
    
    if (error) {
      console.error('Erro ao executar generate-sitemap:', error);
      return;
    }
    
    console.log('Sitemap corrigido com sucesso!');
    console.log('Estatísticas:', data.stats);
    console.log('URLs totais:', data.stats?.total_urls || 'N/A');
    console.log('Posts do blog:', data.stats?.blog_posts || 'N/A');
    
  } catch (err) {
    console.error('Erro na execução:', err);
  }
}

fixSitemap();