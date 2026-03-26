import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import SEOHead from './SEOHead';
import HeroSection from './HeroSection';
import CTASection from './CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { WHATSAPP_LINK, silos } from '@/data/silos';
import type { LocalData } from '@/data/silos';

interface LocalPageProps {
  local: LocalData;
}

const LocalPageComponent: React.FC<LocalPageProps> = ({ local }) => {
  const breadcrumbs = [
    { name: 'Início', url: '/' },
    { name: `Atendimento ${local.name}`, url: `/atendimento/${local.slug}` },
  ];

  return (
    <Layout>
      <SEOHead
        title={local.metaTitle}
        description={local.metaDescription}
        canonical={`/atendimento/${local.slug}`}
        keywords={local.keywords}
        breadcrumbs={breadcrumbs}
        faq={local.faq}
      />

      <HeroSection
        title={local.h1}
        subtitle={`Atendimento profissional em ${local.name} com a S.O.S Manutenções Residenciais. Chame no WhatsApp!`}
        ctaText="Chamar no WhatsApp"
        ctaLink={WHATSAPP_LINK}
      />

      {/* Breadcrumb */}
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
            {local.content.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground mb-6 leading-relaxed">{p}</p>
            ))}
          </div>

          {/* Highlights */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {local.highlights.map((h, i) => (
                <div key={i} className="text-center p-6 bg-muted rounded-lg">
                  <p className="font-semibold text-foreground">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details per Area */}
      {local.serviceDetails && local.serviceDetails.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nossos serviços em {local.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {local.serviceDetails.map((sd, i) => (
                <div key={i} className="bg-card rounded-lg shadow-md p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{sd.service}</h3>
                  <p className="text-muted-foreground leading-relaxed">{sd.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services links */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serviços disponíveis em {local.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {silos.map((silo) => (
              <Link
                key={silo.slug}
                to={`/${silo.slug}`}
                className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-border text-center"
              >
                <h3 className="text-xl font-semibold mb-2 text-foreground">{silo.title}</h3>
                <p className="text-muted-foreground text-sm">{silo.intro.substring(0, 100)}...</p>
                <span className="inline-block mt-4 text-secondary font-medium text-sm">
                  Ver serviços →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {local.faq && local.faq.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas frequentes — {local.name}
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {local.faq.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Nearby Neighborhoods */}
      {local.nearbyLocals && local.nearbyLocals.length > 0 && (
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Bairros próximos que também atendemos
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {local.nearbyLocals.map((slug) => {
                const nearby = require('@/data/silos').localPages.find((l: LocalData) => l.slug === slug);
                return nearby ? (
                  <Link
                    key={slug}
                    to={`/atendimento/${slug}`}
                    className="bg-card hover:bg-accent px-6 py-3 rounded-full text-foreground font-medium shadow-sm border border-border transition-colors"
                  >
                    {nearby.name}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`📲 Precisa de ajuda em ${local.name}?`}
        description="Chame no WhatsApp e resolva hoje mesmo! Atendimento rápido e profissional."
        buttonText="Chamar no WhatsApp"
        buttonLink={WHATSAPP_LINK}
      />
    </Layout>
  );
};

export default LocalPageComponent;
