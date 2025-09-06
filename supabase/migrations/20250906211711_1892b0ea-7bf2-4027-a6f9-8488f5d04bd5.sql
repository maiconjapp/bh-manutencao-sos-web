-- Corrigir RLS policies para permitir inserções das Edge Functions
-- Drop existing policies que podem estar causando problemas
DROP POLICY IF EXISTS "Apenas admins podem gerenciar keywords" ON public.keyword_analysis;
DROP POLICY IF EXISTS "Apenas admins podem gerenciar posts" ON public.blog_posts;

-- Criar policies mais permissivas para Edge Functions
CREATE POLICY "Edge functions podem gerenciar keywords" 
ON public.keyword_analysis 
FOR ALL 
USING (true)
WITH CHECK (true);

CREATE POLICY "Edge functions podem gerenciar posts" 
ON public.blog_posts 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Manter policy de visualização pública
CREATE POLICY "Keywords são visíveis para todos" 
ON public.keyword_analysis 
FOR SELECT 
USING (true);

CREATE POLICY "Blog posts publicados são visíveis para todos" 
ON public.blog_posts 
FOR SELECT 
USING (status = 'published');

-- Adicionar policy para admins gerenciarem tudo
CREATE POLICY "Admins podem gerenciar keywords" 
ON public.keyword_analysis 
FOR ALL 
TO authenticated
USING (auth.uid() IN (SELECT user_id FROM admin_users))
WITH CHECK (auth.uid() IN (SELECT user_id FROM admin_users));

CREATE POLICY "Admins podem gerenciar posts" 
ON public.blog_posts 
FOR ALL 
TO authenticated
USING (auth.uid() IN (SELECT user_id FROM admin_users))
WITH CHECK (auth.uid() IN (SELECT user_id FROM admin_users));