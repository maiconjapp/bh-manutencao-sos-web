-- Correção retroativa: Adicionar todos os posts publicados ao sitemap
INSERT INTO public.sitemap_urls (url, url_type, priority, change_frequency, last_modified, is_active)
SELECT 
  '/blog/' || slug as url,
  'blog' as url_type,
  0.7 as priority,
  'monthly' as change_frequency,
  COALESCE(updated_at, published_at) as last_modified,
  true as is_active
FROM public.blog_posts 
WHERE status = 'published'
  AND '/blog/' || slug NOT IN (SELECT url FROM public.sitemap_urls WHERE url_type = 'blog')
ON CONFLICT (url) DO UPDATE SET
  last_modified = EXCLUDED.last_modified,
  is_active = true;