
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';
import { Bolt, Plug, Wrench, ShowerHead } from 'lucide-react';

const ServiceIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-14 h-14 flex items-center justify-center bg-secondary/10 rounded-full">
    {children}
  </div>
);

const Index: React.FC = () => {
  const services = [
    {
      title: "Conserto Hidráulico",
      description: "Vazamentos, torneiras, canos, válvulas e todos os tipos de reparos hidráulicos com atendimento rápido.",
      icon: (
        <ServiceIcon>
          <Wrench className="w-7 h-7" />
        </ServiceIcon>
      ),
      link: "/servicos#hidraulico"
    },
    {
      title: "Desentupimento",
      description: "Desentupimento de pias, vasos sanitários, ralos, caixas de gordura e tubulações com equipamento especializado.",
      icon: (
        <ServiceIcon>
          <ShowerHead className="w-7 h-7" />
        </ServiceIcon>
      ),
      link: "/servicos#desentupimento"
    },
    {
      title: "Serviços Elétricos",
      description: "Instalação e reparo de tomadas, interruptores, disjuntores, chuveiros e fiação elétrica.",
      icon: (
        <ServiceIcon>
          <Bolt className="w-7 h-7" />
        </ServiceIcon>
      ),
      link: "/servicos#eletricos"
    },
    {
      title: "Instalações",
      description: "Instalação de ventiladores, suportes de TV, cuba de banheiro, painel de LED e muito mais.",
      icon: (
        <ServiceIcon>
          <Plug className="w-7 h-7" />
        </ServiceIcon>
      ),
      link: "/servicos#instalacoes"
    }
  ];

  const benefits = [
    {
      title: "Atendimento 24h",
      description: "Estamos disponíveis 24 horas por dia, 7 dias por semana, inclusive feriados."
    },
    {
      title: "Preço Justo",
      description: "Orçamento transparente, sem surpresas. Você sabe exatamente quanto vai pagar."
    },
    {
      title: "Profissionais Qualificados",
      description: "Nossa equipe é formada por profissionais experientes e qualificados."
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="✅ Conserto Hidráulico, Elétrico e Desentupimentos em BH"
        subtitle="🚨 Atendimento rápido na Pampulha, Zona Norte e região. 📞 Chame agora no WhatsApp (31) 98731-6012"
        ctaText="Chamar no WhatsApp"
        ctaLink="https://wa.me/5531987316012?text=Olá!%20Quero%20um%20orçamento.%20Vim%20pelo%20site."
      />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para sua residência em Belo Horizonte.
              Desde pequenos reparos até instalações completas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que nos escolher?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Na S.O.S Manutenções Residenciais, o seu problema é nossa prioridade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* CTA Section */}
      <CTASection
        title="📲 Fale agora no WhatsApp e resolva ainda hoje!"
        description="Não perca tempo com problemas que podem ser resolvidos rapidamente. Entre em contato agora mesmo e solicite um orçamento."
        buttonText="Chamar no WhatsApp"
        buttonLink="https://wa.me/5531987316012?text=Olá!%20Quero%20um%20orçamento.%20Vim%20pelo%20site."
      />
    </Layout>
  );
};

export default Index;
