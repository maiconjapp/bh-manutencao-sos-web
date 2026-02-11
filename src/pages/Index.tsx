import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';
import SEOHead from '../components/SEOHead';
import { silos, localPages, WHATSAPP_LINK } from '@/data/silos';
import { Wrench, Droplets, Zap, ShowerHead } from 'lucide-react';

const siloIcons: Record<string, React.ReactNode> = {
  'marido-de-aluguel': <Wrench className="w-10 h-10 text-secondary" />,
  'encanador': <Droplets className="w-10 h-10 text-secondary" />,
  'eletricista': <Zap className="w-10 h-10 text-secondary" />,
  'desentupimento': <ShowerHead className="w-10 h-10 text-secondary" />,
};

const Index: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="Marido de Aluguel em BH | Encanador, Eletricista e Desentupimento"
        description="Marido de aluguel em Belo Horizonte. Serviços de encanador, eletricista e desentupimento na Pampulha e região. Atendimento 24h!"
        canonical="/"
        keywords={["marido de aluguel bh", "encanador belo horizonte", "eletricista bh", "desentupimento bh"]}
      />

      <HeroSection
        title="✅ Marido de Aluguel em Belo Horizonte – Serviços Residenciais Profissionais"
        subtitle="🚨 Encanador, eletricista e desentupimento na Pampulha e toda BH. 📞 Chame agora no WhatsApp (31) 98731-6012"
        ctaText="Chamar no WhatsApp"
        ctaLink={WHATSAPP_LINK}
      />

      {/* Silos Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços Especializados</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Soluções completas para sua residência em Belo Horizonte. Clique em cada serviço para saber mais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {silos.map((silo) => (
              <Link
                key={silo.slug}
                to={`/${silo.slug}`}
                className="bg-card rounded-lg shadow-md p-8 hover:shadow-xl transition-all border border-border text-center group"
              >
                <div className="flex justify-center mb-4">
                  {siloIcons[silo.slug]}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{silo.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{silo.intro.substring(0, 120)}...</p>
                <span className="text-secondary font-semibold text-sm">Ver serviços →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pampulha Highlight */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">📍 Destaque: Atendimento na Pampulha</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos localizados na região da Pampulha e oferecemos atendimento prioritário para moradores dos bairros Ouro Preto, Castelo, Jaraguá, São Luiz, Bandeirantes, Itapoã e adjacentes.
            </p>
            <Link
              to="/atendimento/pampulha"
              className="inline-block bg-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-secondary/90 transition"
            >
              Conheça nosso atendimento na Pampulha
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que nos escolher?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Na S.O.S Manutenções Residenciais, o seu problema é nossa prioridade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Atendimento 24h", desc: "Disponíveis 24 horas por dia, 7 dias por semana, inclusive feriados." },
              { title: "Preço Justo", desc: "Orçamento transparente, sem surpresas. Você sabe exatamente quanto vai pagar." },
              { title: "Profissionais Qualificados", desc: "Equipe experiente e qualificada para todos os tipos de serviço." },
            ].map((b, i) => (
              <div key={i} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
                <p className="text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Areas Atendidas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Áreas Atendidas em Belo Horizonte</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {localPages.map((local) => (
              <Link
                key={local.slug}
                to={`/atendimento/${local.slug}`}
                className="bg-card rounded-lg p-4 text-center hover:shadow-md transition border border-border"
              >
                <span className="font-semibold text-foreground">{local.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Confira nossa localização e as avaliações dos nossos clientes no Google
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.6901638670583!2d-43.937651620670046!3d-19.810729933981648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d5538d36466c3e5%3A0x5c537d59c6993515!2sS.O.S%20Manuten%C3%A7%C3%B5es%20Residenciais%20-%20Marido%20de%20Aluguel%20BH!5e0!3m2!1spt-BR!2sbr!4v1745087978493!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização S.O.S Manutenções Residenciais"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="📲 Fale agora no WhatsApp e resolva ainda hoje!"
        description="Não perca tempo com problemas que podem ser resolvidos rapidamente. Entre em contato agora mesmo e solicite um orçamento."
        buttonText="Chamar no WhatsApp"
        buttonLink={WHATSAPP_LINK}
      />
    </Layout>
  );
};

export default Index;
