import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const DynamicSitemap = () => {
  useEffect(() => {
    const generateSitemap = async () => {
      try {
        // Buscar todas as URLs ativas do sitemap
        const { data: urls, error } = await supabase
          .from('sitemap_urls')
          .select('*')
          .eq('is_active', true)
          .order('priority', { ascending: false });

        if (error) {
          console.error('Erro ao buscar URLs do sitemap:', error);
          return;
        }

        // Gerar XML do sitemap
        const baseUrl = 'https://www.sosmaridodealuguelbh.com.br';
        
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

        for (const urlData of urls || []) {
          const lastMod = new Date(urlData.last_modified).toISOString().split('T')[0];
          
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

        // Definir content type como XML e retornar
        const response = new Response(sitemap, {
          headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600',
          },
        });

        // Substituir o conteúdo da página atual pelo XML
        document.open();
        document.write(sitemap);
        document.close();
        
      } catch (error) {
        console.error('Erro ao gerar sitemap dinâmico:', error);
      }
    };

    generateSitemap();
  }, []);

  return null; // Este componente não renderiza nada visualmente
};

export default DynamicSitemap;