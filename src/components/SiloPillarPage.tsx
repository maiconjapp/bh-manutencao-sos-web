import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import SEOHead from './SEOHead';
import HeroSection from './HeroSection';
import CTASection from './CTASection';
import { WHATSAPP_LINK } from '@/data/silos';
import type { SiloData } from '@/data/silos';

interface SiloPillarPageProps {
  silo: SiloData;
}

const SiloPillarPage: React.FC<SiloPillarPageProps> = ({ silo }) => {
  const breadcrumbs = [
    { name: 'Início', url: '/' },
    { name: silo.title, url: `/${silo.slug}` },
  ];

  return (
    <Layout>
      <SEOHead
        title={silo.metaTitle}
        description={silo.metaDescription}
        canonical={`/${silo.slug}`}
        keywords={silo.keywords}
        breadcrumbs={breadcrumbs}
        serviceType={silo.title}
      />

      <HeroSection
        title={silo.h1}
        subtitle={silo.intro}
        ctaText="Chamar no WhatsApp"
        ctaLink={WHATSAPP_LINK}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-muted py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={b.url}>
                {i > 0 && <span>›</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-medium">{b.name}</span>
                ) : (
                  <Link to={b.url} className="hover:text-secondary">{b.name}</Link>
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </nav>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {silo.content.map((paragraph, i) => (
              <p key={i} className="text-lg text-muted-foreground mb-6 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Child Pages Links */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços de {silo.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {silo.children.map((child) => (
              <Link
                key={child.slug}
                to={`/${silo.slug}/${child.slug}`}
                className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-border"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">{child.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{child.content[0]}</p>
                <span className="inline-block mt-4 text-secondary font-medium text-sm">
                  Saiba mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="📲 Solicite seu orçamento agora!"
        description={`Precisa de ${silo.title.toLowerCase()} em Belo Horizonte? Chame no WhatsApp e resolva hoje mesmo!`}
        buttonText="Chamar no WhatsApp"
        buttonLink={WHATSAPP_LINK}
      />
    </Layout>
  );
};

export default SiloPillarPage;
