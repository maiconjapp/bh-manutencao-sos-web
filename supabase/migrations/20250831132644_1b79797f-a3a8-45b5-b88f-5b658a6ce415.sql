-- Criar tabela para posts do blog
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  featured_image TEXT,
  neighborhood TEXT,
  service_type TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  views_count INTEGER DEFAULT 0,
  is_generated_by_ai BOOLEAN DEFAULT true,
  source_keywords TEXT[],
  target_audience TEXT,
  seo_score INTEGER DEFAULT 0,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Políticas RLS
CREATE POLICY "Blog posts são visíveis para todos" 
ON public.blog_posts 
FOR SELECT 
USING (status = 'published');

CREATE POLICY "Apenas admins podem gerenciar posts" 
ON public.blog_posts 
FOR ALL 
USING (auth.uid() IN (SELECT user_id FROM admin_users));

-- Criar tabela para keywords de trending
CREATE TABLE public.keyword_analysis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword TEXT NOT NULL,
  search_volume INTEGER DEFAULT 0,
  competition_score NUMERIC(3,2) DEFAULT 0,
  trend_score INTEGER DEFAULT 0,
  related_neighborhoods TEXT[],
  related_services TEXT[],
  difficulty_score INTEGER DEFAULT 0,
  monthly_searches INTEGER DEFAULT 0,
  last_analyzed TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  is_active BOOLEAN DEFAULT true
);

-- Habilitar RLS para keyword_analysis
ALTER TABLE public.keyword_analysis ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Keywords são visíveis para todos" 
ON public.keyword_analysis 
FOR SELECT 
USING (true);

CREATE POLICY "Apenas admins podem gerenciar keywords" 
ON public.keyword_analysis 
FOR ALL 
USING (auth.uid() IN (SELECT user_id FROM admin_users));

-- Criar tabela para configuração do gerador de conteúdo
CREATE TABLE public.content_generator_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  gemini_api_key_encrypted TEXT,
  content_generation_enabled BOOLEAN DEFAULT true,
  daily_post_limit INTEGER DEFAULT 2,
  target_neighborhoods TEXT[] DEFAULT ARRAY['Pampulha', 'Zona Norte', 'Centro', 'Savassi', 'Funcionários', 'Barro Preto'],
  target_services TEXT[] DEFAULT ARRAY['Elétrica', 'Hidráulica', 'Pintura', 'Reforma', 'Ar Condicionado', 'Gesso'],
  min_keyword_volume INTEGER DEFAULT 100,
  content_template TEXT DEFAULT 'Artigo sobre {service} em {neighborhood}, Belo Horizonte',
  seo_focus_enabled BOOLEAN DEFAULT true,
  auto_publish BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.content_generator_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Apenas admins podem gerenciar configuração" 
ON public.content_generator_config 
FOR ALL 
USING (auth.uid() IN (SELECT user_id FROM admin_users));

-- Criar tabela para sitemap dinâmico
CREATE TABLE public.sitemap_urls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  url TEXT NOT NULL UNIQUE,
  url_type TEXT NOT NULL CHECK (url_type IN ('static', 'blog', 'service', 'neighborhood')),
  priority NUMERIC(2,1) DEFAULT 0.5,
  change_frequency TEXT DEFAULT 'weekly' CHECK (change_frequency IN ('always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never')),
  last_modified TIMESTAMP WITH TIME ZONE DEFAULT now(),
  is_active BOOLEAN DEFAULT true,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.sitemap_urls ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Sitemap URLs são visíveis para todos" 
ON public.sitemap_urls 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Apenas admins podem gerenciar sitemap" 
ON public.sitemap_urls 
FOR ALL 
USING (auth.uid() IN (SELECT user_id FROM admin_users));

-- Trigger para atualizar updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_content_generator_config_updated_at
  BEFORE UPDATE ON public.content_generator_config
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Inserir configuração inicial
INSERT INTO public.content_generator_config (content_generation_enabled) VALUES (true);

-- Inserir URLs estáticas no sitemap
INSERT INTO public.sitemap_urls (url, url_type, priority, change_frequency) VALUES
('/', 'static', 1.0, 'daily'),
('/sobre', 'static', 0.8, 'monthly'),
('/servicos', 'static', 0.9, 'weekly'),
('/contato', 'static', 0.7, 'monthly'),
('/blog', 'static', 0.8, 'daily');

-- Inserir URLs de bairros
INSERT INTO public.sitemap_urls (url, url_type, priority, change_frequency) VALUES
('/bairros/pampulha', 'neighborhood', 0.9, 'weekly'),
('/bairros/zona-norte', 'neighborhood', 0.9, 'weekly'),
('/bairros/centro', 'neighborhood', 0.9, 'weekly'),
('/bairros/savassi', 'neighborhood', 0.9, 'weekly'),
('/bairros/funcionarios', 'neighborhood', 0.9, 'weekly'),
('/bairros/barro-preto', 'neighborhood', 0.9, 'weekly');