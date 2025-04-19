
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';

const About: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Sobre a S.O.S Manutenções Residenciais"
        subtitle="Conheça nossa história, valores e compromisso com a qualidade dos serviços"
        ctaText="Fale Conosco"
        ctaLink="https://wa.me/5531987316012?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20empresa.%20Vim%20pela%20página%20Sobre."
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-700 mb-8">
                Somos especialistas em manutenção residencial em Belo Horizonte. 
                Atendemos com agilidade e qualidade serviços de encanamento, elétrica 
                e desentupimento, com foco nas regiões da Pampulha, Etelvina Carneiro, 
                Ouro Preto, Castelo e bairros vizinhos.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Nossa missão é proporcionar soluções práticas e eficientes para o dia a dia 
                dos moradores de Belo Horizonte, garantindo conforto e segurança para 
                sua família e seu lar.
              </p>
              
              <h2 className="text-3xl font-bold mb-6">Nossa Experiência</h2>
              <p className="text-lg text-gray-700 mb-8">
                Com mais de 10 anos de experiência no mercado de Belo Horizonte, 
                nossos profissionais são qualificados e preparados para atender 
                diversos tipos de necessidades residenciais.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Trabalhamos com as melhores ferramentas e materiais disponíveis, 
                garantindo um serviço de qualidade e durabilidade. Nossa equipe 
                passa por treinamentos constantes para se manter atualizada com 
                as novas técnicas e tecnologias do mercado.
              </p>
              
              <h2 className="text-3xl font-bold mb-6">Nossos Valores</h2>
              <ul className="list-disc ml-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>Comprometimento com a qualidade</li>
                <li>Transparência no orçamento</li>
                <li>Respeito ao cliente</li>
                <li>Pontualidade nos atendimentos</li>
                <li>Limpeza após a execução do serviço</li>
                <li>Garantia do trabalho realizado</li>
              </ul>
              
              <h2 className="text-3xl font-bold mb-6">Área de Atendimento</h2>
              <p className="text-lg text-gray-700 mb-8">
                Atendemos toda a região de Belo Horizonte, com foco especial nas regiões:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <ul className="list-disc ml-6 text-lg text-gray-700 space-y-1">
                  <li>Pampulha</li>
                  <li>Zona Norte</li>
                  <li>Ouro Preto</li>
                  <li>Castelo</li>
                </ul>
                <ul className="list-disc ml-6 text-lg text-gray-700 space-y-1">
                  <li>Jaraguá</li>
                  <li>Etelvina Carneiro</li>
                  <li>Aeroporto</li>
                  <li>E regiões próximas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Precisa de um conserto residencial?"
        description="Entre em contato conosco agora mesmo e solicite um orçamento sem compromisso."
        buttonText="Chamar no WhatsApp"
        buttonLink="https://wa.me/5531987316012?text=Olá!%20Quero%20um%20orçamento.%20Vim%20pela%20página%20Sobre."
      />
    </Layout>
  );
};

export default About;
