import React, { useState, useEffect } from 'react';
import { Plus, Play, Settings, BarChart3, FileText, RefreshCw, Edit, Trash2, Eye, EyeOff, ExternalLink } from 'lucide-react';
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
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log('🔄 Iniciando busca de dados...');
      
      // Buscar posts com debug
      const { data: postsData, error: postsError } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      console.log('📊 Resposta da query posts:', { postsData, postsError });

      if (postsError) {
        console.error('❌ Erro na query:', postsError);
        throw postsError;
      }

      const posts = postsData || [];
      console.log(`✅ Posts carregados: ${posts.length}`);
      console.log('📝 Posts encontrados:', posts.map(p => ({ 
        id: p.id, 
        title: p.title, 
        status: p.status 
      })));
      
      setPosts(posts);

      // Calcular estatísticas com debug
      const totalPosts = posts.length;
      const publishedPosts = posts.filter(p => p.status === 'published').length;
      const draftPosts = posts.filter(p => p.status === 'draft').length;
      const totalViews = posts.reduce((sum, p) => sum + (p.views_count || 0), 0);
      
      const today = new Date().toISOString().split('T')[0];
      const postsToday = posts.filter(p => 
        p.created_at.split('T')[0] === today
      ).length;

      const newStats = {
        total_posts: totalPosts,
        published_posts: publishedPosts,
        draft_posts: draftPosts,
        total_views: totalViews,
        posts_today: postsToday,
      };

      console.log('📈 Estatísticas calculadas:', newStats);
      setStats(newStats);

    } catch (error) {
      console.error('💥 Erro completo ao buscar dados:', error);
      console.error('🔍 Detalhes do erro:', {
        message: error?.message,
        code: error?.code,
        details: error?.details
      });
      toast.error(`Erro ao carregar dados: ${error?.message || 'Erro desconhecido'}`);
    } finally {
      console.log('🏁 Finalizando fetchData, loading = false');
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

  const publishPost = async (postId: string) => {
    setActionLoading(postId);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ 
          status: 'published',
          published_at: new Date().toISOString()
        })
        .eq('id', postId);

      if (error) throw error;

      toast.success('Post publicado com sucesso!');
      fetchData();
    } catch (error) {
      console.error('Erro ao publicar post:', error);
      toast.error('Erro ao publicar post');
    } finally {
      setActionLoading(null);
    }
  };

  const unpublishPost = async (postId: string) => {
    setActionLoading(postId);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ 
          status: 'draft',
          published_at: null
        })
        .eq('id', postId);

      if (error) throw error;

      toast.success('Post despublicado com sucesso!');
      fetchData();
    } catch (error) {
      console.error('Erro ao despublicar post:', error);
      toast.error('Erro ao despublicar post');
    } finally {
      setActionLoading(null);
    }
  };

  const deletePost = async (postId: string, postTitle: string) => {
    if (!confirm(`Tem certeza que deseja deletar o post "${postTitle}"? Esta ação não pode ser desfeita.`)) {
      return;
    }

    setActionLoading(postId);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      toast.success('Post deletado com sucesso!');
      fetchData();
    } catch (error) {
      console.error('Erro ao deletar post:', error);
      toast.error('Erro ao deletar post');
    } finally {
      setActionLoading(null);
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
                {/* Debug info - remover depois */}
                <div className="text-xs text-muted-foreground border-l-4 border-blue-500 pl-2 bg-blue-50 p-2 rounded">
                  Debug: {posts.length} posts carregados | Loading: {loading.toString()}
                </div>
                
                {posts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      Nenhum post encontrado. Gere seu primeiro conteúdo!
                    </p>
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
                      {generating ? 'Gerando...' : 'Gerar Primeiro Post'}
                    </Button>
                  </div>
                ) : (
                  posts.map((post) => (
                    <div 
                      key={post.id} 
                      className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-2 text-base">{post.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap mb-2">
                          <span>Criado: {formatDate(post.created_at)}</span>
                          <span>•</span>
                          <span>{post.views_count} views</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {post.neighborhood && (
                            <Badge variant="outline" className="text-xs">{post.neighborhood}</Badge>
                          )}
                          {post.service_type && (
                            <Badge variant="secondary" className="text-xs">{post.service_type}</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-2">
                        <Badge 
                          variant={getStatusColor(post.status)}
                          className="self-start sm:self-center"
                        >
                          {post.status === 'published' ? 'Publicado' : 
                           post.status === 'draft' ? 'Rascunho' : 'Arquivado'}
                        </Badge>
                        
                        <div className="flex items-center gap-2">
                          {/* Botão Ver Post (apenas para posts publicados) */}
                          {post.status === 'published' && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                              title="Ver post no blog"
                              className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          )}
                          
                          {/* Botão Publicar/Despublicar */}
                          {post.status === 'draft' ? (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => publishPost(post.id)}
                              disabled={actionLoading === post.id}
                              title="👁️ Publicar post"
                              className="bg-green-50 hover:bg-green-100 text-green-600 border-green-200"
                            >
                              {actionLoading === post.id ? (
                                <RefreshCw className="w-4 h-4 animate-spin" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </Button>
                          ) : (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => unpublishPost(post.id)}
                              disabled={actionLoading === post.id}
                              title="⏸️ Despublicar post"
                              className="bg-yellow-50 hover:bg-yellow-100 text-yellow-600 border-yellow-200"
                            >
                              {actionLoading === post.id ? (
                                <RefreshCw className="w-4 h-4 animate-spin" />
                              ) : (
                                <EyeOff className="w-4 h-4" />
                              )}
                            </Button>
                          )}
                          
                          {/* Botão Deletar */}
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => deletePost(post.id, post.title)}
                            disabled={actionLoading === post.id}
                            title="🗑️ Deletar post"
                            className="bg-red-50 hover:bg-red-100 text-red-600 border-red-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
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