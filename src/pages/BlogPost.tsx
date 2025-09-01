import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Wrench, ArrowLeft, Share2, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import WhatsAppInlineButton from '@/components/WhatsAppInlineButton';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  meta_description: string;
  meta_keywords: string[];
  neighborhood: string;
  service_type: string;
  published_at: string;
  views_count: number;
  featured_image?: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      // Buscar o post
      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (postError || !postData) {
        throw new Error('Post não encontrado');
      }

      setPost(postData);

      // Incrementar visualizações
      await supabase
        .from('blog_posts')
        .update({ views_count: (postData.views_count || 0) + 1 })
        .eq('id', postData.id);

      // Buscar posts relacionados
      const { data: relatedData } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, neighborhood, service_type, published_at, content, meta_description, meta_keywords, views_count, featured_image')
        .eq('status', 'published')
        .neq('id', postData.id)
        .or(`neighborhood.eq.${postData.neighborhood},service_type.eq.${postData.service_type}`)
        .limit(3);

      setRelatedPosts(relatedData || []);

    } catch (error) {
      console.error('Erro ao buscar post:', error);
      toast.error('Post não encontrado');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = post?.title || 'SOS Manutenções';
    
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        toast.success('Compartilhado com sucesso!');
      } catch (error) {
        // Usuário cancelou o compartilhamento
      }
    } else {
      // Fallback: copiar para clipboard
      try {
        await navigator.clipboard.writeText(url);
        toast.success('Link copiado para a área de transferência!');
      } catch (error) {
        toast.error('Erro ao copiar link');
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded mb-4"></div>
                <div className="h-4 bg-muted rounded mb-8 w-3/4"></div>
                <div className="h-64 bg-muted rounded mb-8"></div>
                <div className="space-y-4">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="h-4 bg-muted rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-muted-foreground mb-4">
              Post não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Link to="/blog">
              <Button>Voltar ao Blog</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* SEO Meta Tags */}
      <title>{post.title} | SOS Manutenções</title>
      <meta name="description" content={post.meta_description || post.excerpt} />
      <meta name="keywords" content={post.meta_keywords?.join(', ')} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.meta_description || post.excerpt} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={window.location.href} />
      {post.featured_image && <meta property="og:image" content={post.featured_image} />}

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.meta_description || post.excerpt,
          "author": {
            "@type": "Organization",
            "name": "SOS Manutenções"
          },
          "publisher": {
            "@type": "Organization",
            "name": "SOS Manutenções",
            "logo": {
              "@type": "ImageObject",
              "url": "https://sosmanutencoes.com.br/logo.png"
            }
          },
          "datePublished": post.published_at,
          "dateModified": post.published_at,
          ...(post.featured_image && { "image": post.featured_image })
        })}
      </script>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.service_type && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Wrench className="w-3 h-3" />
                    {post.service_type}
                  </Badge>
                )}
                {post.neighborhood && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {post.neighborhood}
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-xl text-muted-foreground mb-6">
                  {post.excerpt}
                </p>
              )}

              <div className="flex items-center justify-between border-b pb-6">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.published_at)}
                  </div>
                  <div>
                    {post.views_count + 1} visualizações
                  </div>
                </div>

                <Button 
                  onClick={handleShare}
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="mb-8">
                <img 
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Inline WhatsApp Button */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Precisa de ajuda profissional?
                  </h3>
                  <p className="text-green-700">
                    Fale conosco agora mesmo via WhatsApp e solicite seu orçamento!
                  </p>
                </div>
                <WhatsAppInlineButton 
                  service={post.service_type}
                  neighborhood={post.neighborhood}
                  size="lg"
                />
              </div>
            </div>

            {/* Keywords */}
            {post.meta_keywords && post.meta_keywords.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Palavras-chave:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.meta_keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-muted/30 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold mb-2">
                        <Link 
                          to={`/blog/${relatedPost.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {formatDate(relatedPost.published_at)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-600/90 via-green-700/95 to-green-800/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Precisando de {post.service_type || 'ajuda profissional'}?
              </h2>
              <p className="text-lg text-green-100 mb-8">
                Estamos prontos para atender você em {post.neighborhood || 'toda Belo Horizonte'}. 
                Entre em contato via WhatsApp e receba seu orçamento gratuitamente!
              </p>
              <a
                href={`https://wa.me/5531987316012?text=${encodeURIComponent(
                  `Olá! Vi seu artigo sobre ${post.service_type || 'serviços'} em ${post.neighborhood || 'Belo Horizonte'} e gostaria de solicitar um orçamento. Pode me ajudar?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-green-700 hover:bg-green-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-bold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp Agora
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPost;