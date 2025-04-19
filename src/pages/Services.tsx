import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import { Bolt, Plug, Wrench, ShowerHead } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: "hidraulico",
      title: "Encanador 24h",
      icon: <Wrench className="w-12 h-12 text-secondary" />,
      imageUrl: "https://i.ibb.co/1YnM1GV2/IMG-7003-2.jpg",
      services: [
        "Conserto de vazamentos",
        "Troca de torneiras e registros",
        "Reparo em tubulações",
        "Instalação de filtros e purificadores",
        "Reparo de válvulas de descarga",
        "Manutenção preventiva"
      ],
      description: "Atendimento rápido para qualquer problema hidráulico em sua residência. Nossos encanadores são experientes e utilizam ferramentas adequadas para resolver seu problema com eficiência e garantia de serviço."
    },
    {
      id: "desentupimento",
      title: "Desentupidora Residencial",
      icon: <ShowerHead className="w-12 h-12 text-secondary" />,
      imageUrl: "https://i.ibb.co/Z6BVJCJ5/Desentupimento-de-vaso-sanit-rio-em-Belo-Horizonte-com-a-S-O-S-Manuten-es-Residenciais-Marido-de.jpg",
      services: [
        "Desentupimento de pias e ralos",
        "Desentupimento de vasos sanitários",
        "Limpeza de caixa de gordura",
        "Desentupimento de tubulações",
        "Hidrojateamento",
        "Inspeção com câmera"
      ],
      description: "Oferecemos serviço especializado de desentupimento para sua residência, com equipamentos modernos e técnicas eficientes que solucionam o problema sem danificar suas instalações."
    },
    {
      id: "eletricos",
      title: "Serviços Elétricos",
      icon: <Bolt className="w-12 h-12 text-secondary" />,
      imageUrl: "https://i.ibb.co/NzndpZS/Servi-os-de-eletricista-em-Belo-Horizonte-com-a-S-O-S-Manuten-es-Residenciais-Marido-de-Aluguel-B.jpg",
      services: [
        "Instalação de chuveiros",
        "Troca de disjuntores",
        "Instalação de tomadas e interruptores",
        "Troca de resistência",
        "Instalação de ventiladores",
        "Substituição de fiação"
      ],
      description: "Serviços elétricos residenciais com segurança e qualidade. Nossos eletricistas são qualificados para realizar instalações e reparos seguindo todas as normas técnicas, garantindo a segurança da sua família."
    },
    {
      id: "instalacoes",
      title: "Instalações e Montagens",
      icon: <Plug className="w-12 h-12 text-secondary" />,
      imageUrl: "https://i.ibb.co/rfdBW7kN/IMG-6993.jpg",
      services: [
        "Fixação de cuba e pia",
        "Instalação de suporte para TV",
        "Montagem de painel de LED",
        "Instalação de prateleiras",
        "Montagem de móveis",
        "Instalação de fechaduras"
      ],
      description: "Realizamos instalações e montagens diversas em sua residência, desde fixação de móveis e equipamentos até montagem de estruturas mais complexas, sempre com qualidade e acabamento impecável."
    }
  ];

  return (
    <Layout>
      <HeroSection
        title="Serviços Residenciais em Belo Horizonte"
        subtitle="Soluções completas para reparos e manutenções em sua casa, com atendimento rápido e qualidade garantida"
        ctaText="Solicitar Orçamento"
        ctaLink="https://wa.me/5531987316012?text=Olá!%20Quero%20um%20orçamento%20para%20serviços.%20Vim%20pela%20página%20de%20Serviços."
        backgroundImage="https://i.ibb.co/QFkfQrBm/IMG-3279.jpg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
            
            <div className="space-y-16">
              {serviceCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                    {category.imageUrl && (
                      <div className="w-full md:w-1/3 h-64 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={category.imageUrl} 
                          alt={category.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                      <p className="text-gray-700 mb-6">{category.description}</p>
                      
                      <h4 className="text-lg font-semibold mb-3">Serviços incluídos:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {category.services.map((service, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-secondary mt-0.5 mr-2 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href={`https://wa.me/5531987316012?text=Olá!%20Quero%20um%20orçamento%20para%20${encodeURIComponent(category.title)}.%20Vim%20pela%20página%20de%20Serviços.`}
                        className="inline-flex items-center text-white bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-md font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar este serviço
                        <svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {serviceCategories.indexOf(category) !== serviceCategories.length - 1 && (
                    <hr className="border-gray-200 mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Materiais Disponíveis</h2>
                <p className="text-gray-700 mb-6">
                  Para sua comodidade, dispomos de diversos materiais hidráulicos e elétricos. Não precisa sair para comprar - temos tudo que você precisa:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-secondary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Chuveiros elétricos
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-secondary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Sifões
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-secondary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Torneiras
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-secondary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Disjuntores
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-secondary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Conexões hidráulicas
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-secondary mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Materiais elétricos
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://i.ibb.co/67nYhLsw/S-O-S-Manuten-es-Residenciais-Marido-de-Aluguel-BH.jpg"
                  alt="Materiais disponíveis"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Precisa de mais de um serviço?"
        description="Entre em contato conosco para um orçamento personalizado que atenda a todas as suas necessidades."
        buttonText="Falar com um especialista"
        buttonLink="https://wa.me/5531987316012?text=Olá!%20Preciso%20de%20vários%20serviços%20e%20gostaria%20de%20um%20orçamento%20personalizado.%20Vim%20pela%20página%20de%20Serviços."
      />
    </Layout>
  );
};

export default Services;
