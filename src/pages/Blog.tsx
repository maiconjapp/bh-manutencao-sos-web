import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, MapPin, Wrench } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  neighborhood: string;
  service_type: string;
  published_at: string;
  views_count: number;
  featured_image?: string;
  meta_keywords: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService = !selectedService || post.service_type === selectedService;
    const matchesNeighborhood = !selectedNeighborhood || post.neighborhood === selectedNeighborhood;
    
    return matchesSearch && matchesService && matchesNeighborhood;
  });

  const uniqueServices = [...new Set(posts.map(p => p.service_type).filter(Boolean))];
  const uniqueNeighborhoods = [...new Set(posts.map(p => p.neighborhood).filter(Boolean))];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog SOS Manutenções",
    "description": "Dicas práticas de manutenção residencial, elétrica, hidráulica e reforma para moradores de Belo Horizonte",
    "url": "https://www.sosmaridodealuguelbh.com.br/blog",
    "author": {
      "@type": "Organization",
      "name": "SOS Manutenções",
      "url": "https://www.sosmaridodealuguelbh.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SOS Manutenções",
      "url": "https://www.sosmaridodealuguelbh.com.br"
    },
    "blogPost": posts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://www.sosmaridodealuguelbh.com.br/blog/${post.slug}`,
      "datePublished": post.published_at,
      "author": {
        "@type": "Organization",
        "name": "SOS Manutenções"
      }
    }))
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog - Dicas de Manutenção Residencial em BH | SOS Manutenções</title>
        <meta 
          name="description" 
          content="Dicas práticas de manutenção residencial, elétrica, hidráulica e reforma para moradores de Belo Horizonte. Conteúdo especializado por bairro."
        />
        <meta 
          name="keywords" 
          content="blog manutenção residencial, dicas reforma BH, eletricista belo horizonte, encanador BH, pintura residencial"
        />
        <link rel="canonical" href="https://www.sosmaridodealuguelbh.com.br/blog" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog - Dicas de Manutenção Residencial em BH | SOS Manutenções" />
        <meta property="og:description" content="Dicas práticas de manutenção residencial, elétrica, hidráulica e reforma para moradores de Belo Horizonte." />
        <meta property="og:url" content="https://www.sosmaridodealuguelbh.com.br/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SOS Manutenções" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Dicas de Manutenção Residencial em BH" />
        <meta name="twitter:description" content="Dicas práticas de manutenção residencial para moradores de Belo Horizonte." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Blog SOS Manutenções
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Dicas práticas, tutoriais e informações sobre manutenção residencial 
                em Belo Horizonte e região metropolitana
              </p>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
                
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md"
                >
                  <option value="">Todos os serviços</option>
                  {uniqueServices.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>

                <select
                  value={selectedNeighborhood}
                  onChange={(e) => setSelectedNeighborhood(e.target.value)}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md"
                >
                  <option value="">Todos os bairros</option>
                  {uniqueNeighborhoods.map(neighborhood => (
                    <option key={neighborhood} value={neighborhood}>{neighborhood}</option>
                  ))}
                </select>

                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedService('');
                    setSelectedNeighborhood('');
                  }}
                  variant="outline"
                >
                  Limpar filtros
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Lista de Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <div className="h-48 bg-muted rounded-t-lg"></div>
                      <CardContent className="p-6">
                        <div className="h-4 bg-muted rounded mb-2"></div>
                        <div className="h-4 bg-muted rounded mb-4 w-3/4"></div>
                        <div className="h-3 bg-muted rounded mb-2"></div>
                        <div className="h-3 bg-muted rounded w-2/3"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
                    Nenhum artigo encontrado
                  </h3>
                  <p className="text-muted-foreground">
                    Tente ajustar os filtros ou buscar por outros termos.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                      {post.featured_image && (
                        <div className="overflow-hidden rounded-t-lg">
                          <img 
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <CardContent className="p-6">
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

                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          <Link to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        {post.excerpt && (
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.published_at)}
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {post.views_count} visualizações
                          </div>
                        </div>

                        <Link 
                          to={`/blog/${post.slug}`}
                          className="inline-block mt-4 text-primary hover:text-primary/80 font-medium"
                        >
                          Ler mais →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Precisa de ajuda profissional?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa equipe está pronta para atender você em qualquer bairro de Belo Horizonte
              </p>
              <Link to="/contato">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;