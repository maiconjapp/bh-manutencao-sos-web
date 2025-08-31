-- Remover constraint existente se houver e atualizar dados
UPDATE public.automation_logs 
SET status = 'success' 
WHERE status IN ('completed', 'finished', 'done');

UPDATE public.automation_logs 
SET status = 'error' 
WHERE status IN ('failed', 'failure');

-- Adicionar constraints únicos primeiro
ALTER TABLE public.sitemap_urls 
ADD CONSTRAINT IF NOT EXISTS sitemap_urls_url_unique UNIQUE (url);

ALTER TABLE public.blog_posts 
ADD CONSTRAINT IF NOT EXISTS blog_posts_slug_unique UNIQUE (slug);