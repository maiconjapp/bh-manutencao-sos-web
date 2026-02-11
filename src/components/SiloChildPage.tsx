import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import SEOHead from './SEOHead';
import HeroSection from './HeroSection';
import CTASection from './CTASection';
import { WHATSAPP_LINK } from '@/data/silos';
import type { SiloData, SiloChild } from '@/data/silos';

interface SiloChildPageProps {
  silo: SiloData;
  child: SiloChild;
}

const SiloChildPage: React.FC<SiloChildPageProps> = ({ silo, child }) => {
  const breadcrumbs = [
    { name: 'Início', url: '/' },
    { name: silo.title, url: `/${silo.slug}` },
    { name: child.title, url: `/${silo.slug}/${child.slug}` },
  ];

  return (
    <Layout>
      <SEOHead
        title={child.metaTitle}
        description={child.metaDescription}
        canonical={`/${silo.slug}/${child.slug}`}
        keywords={child.keywords}
        breadcrumbs={breadcrumbs}
        serviceType={child.title}
      />

      <HeroSection
        title={child.h1}
        subtitle={child.content[0]}
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

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{child.title}</h2>
            {child.content.map((paragraph, i) => (
              <p key={i} className="text-lg text-muted-foreground mb-6 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Pillar */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Conheça todos os nossos serviços de {silo.title.toLowerCase()}:
          </p>
          <Link
            to={`/${silo.slug}`}
            className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:opacity-90 transition"
          >
            Ver todos os serviços de {silo.title}
          </Link>
        </div>
      </section>

      <CTASection
        title="📲 Resolva agora pelo WhatsApp!"
        description={`Precisa de ${child.title.toLowerCase()}? Chame a S.O.S Manutenções e resolva hoje!`}
        buttonText="Chamar no WhatsApp"
        buttonLink={WHATSAPP_LINK}
      />
    </Layout>
  );
};

export default SiloChildPage;
