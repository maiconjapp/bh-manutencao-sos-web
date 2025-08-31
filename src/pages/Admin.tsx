import React, { useState, useEffect } from 'react';
import { Plus, Play, Settings, BarChart3, FileText, RefreshCw } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  neighborhood: string;
  service_type: string;
  views_count: number;
  published_at: string;
  created_at: string;
}

interface Stats {
  total_posts: number;
  published_posts: number;
  draft_posts: number;
  total_views: number;
  posts_today: number;
}

const Admin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [stats, setStats] = useState<Stats>({
    total_posts: 0,
    published_posts: 0,
    draft_posts: 0,
    total_views: 0,
    posts_today: 0,
  });
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Buscar posts
      const { data: postsData, error: postsError } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      if (postsError) throw postsError;
      setPosts(postsData || []);

      // Calcular estatísticas
      const totalPosts = postsData?.length || 0;
      const publishedPosts = postsData?.filter(p => p.status === 'published').length || 0;
      const draftPosts = postsData?.filter(p => p.status === 'draft').length || 0;
      const totalViews = postsData?.reduce((sum, p) => sum + (p.views_count || 0), 0) || 0;
      
      const today = new Date().toISOString().split('T')[0];
      const postsToday = postsData?.filter(p => 
        p.created_at.split('T')[0] === today
      ).length || 0;

      setStats({
        total_posts: totalPosts,
        published_posts: publishedPosts,
        draft_posts: draftPosts,
        total_views: totalViews,
        posts_today: postsToday,
      });

    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      toast.error('Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  const generateContent = async () => {
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('content-generator', {
        body: { manual: true }
      });

      if (error) throw error;

      toast.success('Conteúdo gerado com sucesso!');
      fetchData(); // Recarregar dados
    } catch (error) {
      console.error('Erro ao gerar conteúdo:', error);
      toast.error('Erro ao gerar conteúdo');
    } finally {
      setGenerating(false);
    }
  };

  const analyzeKeywords = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('keyword-analyzer');

      if (error) throw error;

      toast.success('Análise de keywords concluída!');
    } catch (error) {
      console.error('Erro ao analisar keywords:', error);
      toast.error('Erro ao analisar keywords');
    }
  };

  const generateSitemap = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('generate-sitemap');

      if (error) throw error;

      toast.success('Sitemap gerado com sucesso!');
    } catch (error) {
      console.error('Erro ao gerar sitemap:', error);
      toast.error('Erro ao gerar sitemap');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'default';
      case 'draft': return 'secondary';
      case 'archived': return 'outline';
      default: return 'outline';
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-background p-8">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded mb-8 w-64"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-32 bg-muted rounded"></div>
                ))}
              </div>
              <div className="h-96 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Painel Administrativo</h1>
            <div className="flex gap-4">
              <Button onClick={analyzeKeywords} variant="outline">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analisar Keywords
              </Button>
              <Button onClick={generateSitemap} variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Gerar Sitemap
              </Button>
              <Button 
                onClick={generateContent} 
                disabled={generating}
                className="bg-primary hover:bg-primary/90"
              >
                {generating ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Plus className="w-4 h-4 mr-2" />
                )}
                {generating ? 'Gerando...' : 'Gerar Conteúdo'}
              </Button>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total de Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total_posts}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Publicados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {stats.published_posts}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Rascunhos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">
                  {stats.draft_posts}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Visualizações Totais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {stats.total_views.toLocaleString()}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Posts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Posts Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {posts.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Nenhum post encontrado. Gere seu primeiro conteúdo!
                  </div>
                ) : (
                  posts.map((post) => (
                    <div 
                      key={post.id} 
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{post.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Criado: {formatDate(post.created_at)}</span>
                          {post.neighborhood && (
                            <Badge variant="outline">{post.neighborhood}</Badge>
                          )}
                          {post.service_type && (
                            <Badge variant="secondary">{post.service_type}</Badge>
                          )}
                          <span>{post.views_count} visualizações</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getStatusColor(post.status)}>
                          {post.status === 'published' ? 'Publicado' : 
                           post.status === 'draft' ? 'Rascunho' : 'Arquivado'}
                        </Badge>
                        {post.status === 'published' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                          >
                            Ver Post
                          </Button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Informações do Sistema */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Sistema de Automação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Geração de Conteúdo</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✅ IA Gemini integrada</li>
                    <li>✅ Análise de keywords automatizada</li>
                    <li>✅ Otimização SEO automática</li>
                    <li>✅ Foco em bairros de BH</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">SEO e Indexação</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✅ Sitemap dinâmico</li>
                    <li>✅ Meta tags otimizadas</li>
                    <li>✅ Schema markup</li>
                    <li>✅ URLs amigáveis</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Dica:</strong> O sistema gera automaticamente conteúdo otimizado 
                  para SEO focando nos bairros da Pampulha, Zona Norte e outras regiões 
                  de Belo Horizonte. Cada artigo é criado com base em análise de keywords 
                  e tendências de busca locais.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;