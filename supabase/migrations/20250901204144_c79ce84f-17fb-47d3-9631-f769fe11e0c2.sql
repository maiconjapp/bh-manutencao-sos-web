-- Corrigir search_path da função update_sitemap_on_blog_post
CREATE OR REPLACE FUNCTION public.update_sitemap_on_blog_post()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;