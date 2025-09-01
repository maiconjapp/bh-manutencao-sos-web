import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const DynamicSitemap = () => {
  const [sitemap, setSitemap] = useState<string>('');

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
        
        let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

        for (const urlData of urls || []) {
          const lastMod = new Date(urlData.last_modified).toISOString().split('T')[0];
          
          sitemapXML += `
  <url>
    <loc>${baseUrl}${urlData.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${urlData.change_frequency}</changefreq>
    <priority>${urlData.priority}</priority>
  </url>`;
        }

        sitemapXML += `
</urlset>`;

        setSitemap(sitemapXML);
        
      } catch (error) {
        console.error('Erro ao gerar sitemap dinâmico:', error);
      }
    };

    generateSitemap();
  }, []);

  // Retornar o XML puro
  if (sitemap) {
    // Criar e retornar um XML válido
    return (
      <div
        style={{ 
          fontFamily: 'monospace', 
          whiteSpace: 'pre',
          margin: 0,
          padding: 0 
        }}
        dangerouslySetInnerHTML={{ __html: sitemap }}
      />
    );
  }

  return <div>Gerando sitemap...</div>;
};

export default DynamicSitemap;