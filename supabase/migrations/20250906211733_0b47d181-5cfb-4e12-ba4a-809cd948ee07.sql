-- Remover todas as policies existentes das tabelas principais
DROP POLICY IF EXISTS "Keywords são visíveis para todos" ON public.keyword_analysis;
DROP POLICY IF EXISTS "Blog posts publicados são visíveis para todos" ON public.blog_posts;
DROP POLICY IF EXISTS "Apenas admins podem gerenciar keywords" ON public.keyword_analysis;
DROP POLICY IF EXISTS "Apenas admins podem gerenciar posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Edge functions podem gerenciar keywords" ON public.keyword_analysis;
DROP POLICY IF EXISTS "Edge functions podem gerenciar posts" ON public.blog_posts;

-- Criar policies que permitem acesso total às Edge Functions
CREATE POLICY "Allow all for edge functions on keyword_analysis" 
ON public.keyword_analysis 
FOR ALL 
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow all for edge functions on blog_posts" 
ON public.blog_posts 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Manter visualização pública
CREATE POLICY "Public read keyword_analysis" 
ON public.keyword_analysis 
FOR SELECT 
USING (true);

CREATE POLICY "Public read published blog_posts" 
ON public.blog_posts 
FOR SELECT 
USING (status = 'published');

-- Permitir acesso aos admins autenticados  
CREATE POLICY "Admin full access keyword_analysis" 
ON public.keyword_analysis 
FOR ALL 
TO authenticated
USING (auth.uid() IN (SELECT user_id FROM admin_users))
WITH CHECK (auth.uid() IN (SELECT user_id FROM admin_users));