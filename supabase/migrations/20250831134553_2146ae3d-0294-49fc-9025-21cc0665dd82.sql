-- Primeiro atualizar os dados existentes para valores válidos
UPDATE public.automation_logs 
SET status = 'success' 
WHERE status = 'completed';

-- Agora adicionar o constraint correto
ALTER TABLE public.automation_logs 
ADD CONSTRAINT automation_logs_status_check 
CHECK (status IN ('success', 'error', 'running', 'pending'));

-- Adicionar constraints unique necessários
ALTER TABLE public.sitemap_urls 
ADD CONSTRAINT sitemap_urls_url_unique UNIQUE (url);

ALTER TABLE public.blog_posts 
ADD CONSTRAINT blog_posts_slug_unique UNIQUE (slug);