
-- 1. Restrict 'articles' table SELECT to admins only (contains contact info)
DROP POLICY IF EXISTS "Articles are viewable by everyone" ON public.articles;

-- 2. Remove overly permissive ALL policies on blog_posts and keyword_analysis
-- Edge functions use the service role key, which bypasses RLS.
DROP POLICY IF EXISTS "Allow all for edge functions on blog_posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Allow all for edge functions on keyword_analysis" ON public.keyword_analysis;

-- 3. Set search_path on generate_slug to prevent search_path hijacking
CREATE OR REPLACE FUNCTION public.generate_slug(title text)
 RETURNS text
 LANGUAGE plpgsql
 IMMUTABLE
 SET search_path = public
AS $function$
DECLARE
  slug_text TEXT;
BEGIN
  slug_text := LOWER(title);
  slug_text := TRANSLATE(
    slug_text,
    'áàâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ',
    'aaaaaaaceeeeiiiidnooooouuuuypy'
  );
  slug_text := REGEXP_REPLACE(slug_text, '[^a-z0-9\s-]', '', 'g');
  slug_text := REGEXP_REPLACE(slug_text, '\s+', '-', 'g');
  slug_text := REGEXP_REPLACE(slug_text, '-+', '-', 'g');
  slug_text := TRIM(BOTH '-' FROM slug_text);
  slug_text := SUBSTRING(slug_text, 1, 100);
  RETURN slug_text;
END;
$function$;
