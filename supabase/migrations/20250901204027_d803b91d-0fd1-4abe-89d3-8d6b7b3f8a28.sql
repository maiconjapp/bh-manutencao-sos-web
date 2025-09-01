-- Popular dados iniciais do sitemap
INSERT INTO public.sitemap_urls (url, url_type, priority, change_frequency, last_modified) VALUES
  ('/', 'static', 1.0, 'monthly', now()),
  ('/sobre', 'static', 0.8, 'monthly', now()),
  ('/servicos', 'static', 0.8, 'monthly', now()),
  ('/contato', 'static', 0.8, 'monthly', now()),
  ('/blog', 'static', 0.9, 'weekly', now()),
  ('/bairros/pampulha', 'neighborhood', 0.7, 'monthly', now()),
  ('/bairros/ouro-preto', 'neighborhood', 0.7, 'monthly', now()),
  ('/bairros/castelo', 'neighborhood', 0.7, 'monthly', now()),
  ('/bairros/jaragua', 'neighborhood', 0.7, 'monthly', now()),
  ('/bairros/aeroporto', 'neighborhood', 0.7, 'monthly', now())
ON CONFLICT (url) DO NOTHING;

-- Adicionar job de automação para sitemap
INSERT INTO public.automation_schedule (job_name, function_name, cron_expression, is_active) VALUES
  ('sitemap-daily-update', 'generate-sitemap', '0 5 * * *', true)
ON CONFLICT (job_name) DO NOTHING;

-- Função para atualizar sitemap quando blog post é publicado
CREATE OR REPLACE FUNCTION public.update_sitemap_on_blog_post()
RETURNS TRIGGER AS $$
BEGIN
  -- Se o post foi publicado (status mudou para 'published')
  IF NEW.status = 'published' AND (OLD.status IS NULL OR OLD.status != 'published') THEN
    -- Inserir/atualizar URL do post no sitemap
    INSERT INTO public.sitemap_urls (
      url, 
      url_type, 
      priority, 
      change_frequency, 
      last_modified
    ) VALUES (
      '/blog/' || NEW.slug,
      'blog',
      0.7,
      'monthly',
      NEW.updated_at
    ) ON CONFLICT (url) DO UPDATE SET
      last_modified = NEW.updated_at,
      is_active = true;
      
    -- Chamar função de geração do sitemap assincronamente
    PERFORM net.http_post(
      url := 'https://blmauyummcnxiwumbril.supabase.co/functions/v1/generate-sitemap',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbWF1eXVtbWNueGl3dW1icmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMDk2ODIsImV4cCI6MjA3MDc4NTY4Mn0._wv-ddCw8A53L-X_AficPdHrC26a1r3ZsZAc777MBOE"}'::jsonb,
      body := '{"trigger": "blog_post_published", "post_slug": "' || NEW.slug || '"}'::jsonb
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Criar trigger para blog posts
DROP TRIGGER IF EXISTS trigger_update_sitemap_on_blog_post ON public.blog_posts;
CREATE TRIGGER trigger_update_sitemap_on_blog_post
  AFTER INSERT OR UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_sitemap_on_blog_post();

-- Configurar cron job para sitemap diário
SELECT cron.schedule(
  'sitemap-daily-generation',
  '0 5 * * *', -- 5 AM todos os dias
  $$
  SELECT net.http_post(
    url := 'https://blmauyummcnxiwumbril.supabase.co/functions/v1/generate-sitemap',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbWF1eXVtbWNueGl3dW1icmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMDk2ODIsImV4cCI6MjA3MDc4NTY4Mn0._wv-ddCw8A53L-X_AficPdHrC26a1r3ZsZAc777MBOE"}'::jsonb,
    body := '{"trigger": "daily_cron", "timestamp": "' || now() || '"}'::jsonb
  ) as request_id;
  $$
);