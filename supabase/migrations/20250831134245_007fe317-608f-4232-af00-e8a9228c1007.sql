-- Corrigir problemas na tabela automation_logs
-- Remover constraint check problemático e adicionar constraint correto
ALTER TABLE public.automation_logs DROP CONSTRAINT IF EXISTS automation_logs_status_check;
ALTER TABLE public.automation_logs ADD CONSTRAINT automation_logs_status_check 
  CHECK (status IN ('success', 'error', 'running', 'pending'));

-- Adicionar constraint unique necessário para ON CONFLICT
ALTER TABLE public.sitemap_urls ADD CONSTRAINT sitemap_urls_url_unique UNIQUE (url);

-- Garantir que a tabela blog_posts tem constraint unique no slug
ALTER TABLE public.blog_posts ADD CONSTRAINT blog_posts_slug_unique UNIQUE (slug);