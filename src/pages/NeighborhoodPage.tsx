
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import Breadcrumbs from '../components/Breadcrumbs';
import { Bolt, Plug, Wrench, ShowerHead } from 'lucide-react';

// Define neighborhood data for SEO and content
const neighborhoods = {
  'pampulha': {
    name: 'Pampulha',
    title: 'Serviços de Encanador e Eletricista na Pampulha BH',
    metaDescription: 'Encanador, eletricista e desentupidora na Pampulha BH. Atendimento 24h com preço justo. Consertos residenciais rápidos. Ligue (31) 98731-6012.',
    content: 'Procurando por serviços de encanador, eletricista ou desentupidora na Pampulha? A S.O.S Manutenções Residenciais atende toda a região da Pampulha com rapidez e qualidade. Nossos profissionais estão prontos para resolver qualquer problema residencial, seja um vazamento, uma queda de energia ou um entupimento. Contamos com equipe especializada e equipamentos modernos para garantir o melhor serviço para sua casa.',
    nearby: ['jardim-atlantico', 'ouro-preto', 'bandeirantes', 'universitario']
  },
  'ouro-preto': {
    name: 'Ouro Preto',
    title: 'Serviços de Encanador e Eletricista no Ouro Preto BH',
    metaDescription: 'Encanador, eletricista e desentupidora no bairro Ouro Preto BH. Consertos residenciais 24h com preço justo. Ligue (31) 98731-6012.',
    content: 'Precisa de um encanador, eletricista ou desentupidora no bairro Ouro Preto? A S.O.S Manutenções Residenciais atende toda a região do Ouro Preto e bairros próximos com serviços de qualidade e preço justo. Nossos profissionais são experientes e utilizam ferramentas adequadas para solucionar seu problema com eficiência e rapidez, seja um vazamento, uma instalação elétrica ou um entupimento.',
    nearby: ['pampulha', 'castelo', 'bandeirantes', 'engenho-nogueira']
  },
  'castelo': {
    name: 'Castelo',
    title: 'Serviços de Encanador e Eletricista no bairro Castelo BH',
    metaDescription: 'Encanador, eletricista e desentupidora no bairro Castelo BH. Consertos residenciais 24h com preço justo. Ligue (31) 98731-6012.',
    content: 'Está com problemas hidráulicos ou elétricos no bairro Castelo? A S.O.S Manutenções Residenciais oferece serviços completos de encanador, eletricista e desentupidora para toda a região do Castelo e bairros próximos. Atendemos com rapidez e eficiência, garantindo a qualidade do serviço e a satisfação do cliente. Entre em contato agora mesmo e resolva seu problema hoje!',
    nearby: ['ouro-preto', 'paqueta', 'jardim-atlantico', 'itapoa']
  },
  'jaragua': {
    name: 'Jaraguá',
    title: 'Serviços de Encanador e Eletricista no Jaraguá BH',
    metaDescription: 'Encanador, eletricista e desentupidora no bairro Jaraguá BH. Consertos residenciais 24h com preço justo. Ligue (31) 98731-6012.',
    content: 'Procurando por um encanador, eletricista ou desentupidora no bairro Jaraguá? A S.O.S Manutenções Residenciais atende toda a região do Jaraguá com serviços de qualidade e preço justo. Nossos profissionais são qualificados e utilizam as melhores ferramentas para resolver seu problema com eficiência, seja um vazamento, uma instalação elétrica ou um entupimento.',
    nearby: ['liberdade', 'aeroporto', 'dona-clara', 'indaia']
  },
  'aeroporto': {
    name: 'Aeroporto',
    title: 'Serviços de Encanador e Eletricista no bairro Aeroporto BH',
    metaDescription: 'Encanador, eletricista e desentupidora no bairro Aeroporto BH. Consertos residenciais 24h com preço justo. Ligue (31) 98731-6012.',
    content: 'Está precisando de serviços de encanador, eletricista ou desentupidora no bairro Aeroporto? A S.O.S Manutenções Residenciais atende toda a região com qualidade e preço justo. Nossos profissionais são experientes e estão prontos para resolver qualquer problema em sua residência, desde vazamentos e entupimentos até instalações e reparos elétricos.',
    nearby: ['jaragua', 'liberdade', 'dona-clara', 'universitario']
  }
};

// Default neighborhood data for unknown URLs
const defaultNeighborhood = {
  name: 'Belo Horizonte',
  title: 'Serviços de Encanador e Eletricista em Belo Horizonte',
  metaDescription: 'Encanador, eletricista e desentupidora em Belo Horizonte. Consertos residenciais 24h com preço justo. Ligue (31) 98731-6012.',
  content: 'A S.O.S Manutenções Residenciais oferece serviços completos de encanador, eletricista e desentupidora para toda Belo Horizonte e região metropolitana. Atendemos com rapidez e qualidade, garantindo a solução para o seu problema residencial. Entre em contato agora mesmo e agende um atendimento!',
  nearby: ['pampulha', 'ouro-preto', 'castelo', 'jaragua']
};

const NeighborhoodPage: React.FC = () => {
  const { neighborhood } = useParams<{ neighborhood: string }>();
  
  // Get neighborhood data or fallback to default
  const neighborhoodData = neighborhoods[neighborhood as keyof typeof neighborhoods] || defaultNeighborhood;
  
  // Services with localized titles
  const services = [
    {
      title: `Encanador no bairro ${neighborhoodData.name}`,
      description: `Serviços completos de encanador no bairro ${neighborhoodData.name}. Vazamentos, torneiras, canos, válvulas e todos os tipos de reparos hidráulicos com atendimento rápido.`,
      icon: <Wrench className="w-12 h-12 text-secondary" />,
    },
    {
      title: `Desentupidora no bairro ${neighborhoodData.name}`,
      description: `Desentupimento de pias, vasos sanitários, ralos, caixas de gordura e tubulações no bairro ${neighborhoodData.name}. Equipamento especializado e atendimento rápido.`,
      icon: <ShowerHead className="w-12 h-12 text-secondary" />,
    },
    {
      title: `Eletricista no bairro ${neighborhoodData.name}`,
      description: `Serviços elétricos no bairro ${neighborhoodData.name}. Instalação e reparo de tomadas, interruptores, disjuntores, chuveiros e fiação elétrica com qualidade e segurança.`,
      icon: <Bolt className="w-12 h-12 text-secondary" />,
    },
    {
      title: `Instalações diversas no bairro ${neighborhoodData.name}`,
      description: `Instalação de ventiladores, suportes de TV, cuba de banheiro e painel de LED no bairro ${neighborhoodData.name}. Serviços com qualidade e preço justo.`,
      icon: <Plug className="w-12 h-12 text-secondary" />,
    }
  ];

  return (
    <Layout>
      <Breadcrumbs items={[
        { label: 'Bairros', href: '/bairros' },
        { label: neighborhoodData.name }
      ]} />
      
      <HeroSection
        title={neighborhoodData.title}
        subtitle={`Atendimento 24h com preço justo no bairro ${neighborhoodData.name}. Consertos hidráulicos, elétricos e desentupimentos.`}
        ctaText="Chamar no WhatsApp"
        ctaLink={`https://wa.me/5531987316012?text=Olá!%20Preciso%20de%20um%20serviço%20no%20bairro%20${encodeURIComponent(neighborhoodData.name)}.%20Vim%20pelo%20site.`}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
              Serviços de Encanador, Eletricista e Desentupidora no bairro {neighborhoodData.name} - BH
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700">
                {neighborhoodData.content}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Por que escolher a S.O.S Manutenções Residenciais no bairro {neighborhoodData.name}?
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-secondary mt-0.5 mr-3 shrink-0"
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
                  <div>
                    <span className="font-semibold">Atendimento rápido:</span> Chegamos em até 40 minutos no bairro {neighborhoodData.name} para solucionar seu problema.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-secondary mt-0.5 mr-3 shrink-0"
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
                  <div>
                    <span className="font-semibold">Orçamento transparente:</span> Você sabe exatamente quanto vai pagar, sem surpresas.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-secondary mt-0.5 mr-3 shrink-0"
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
                  <div>
                    <span className="font-semibold">Profissionais qualificados:</span> Nossa equipe é composta por profissionais experientes e treinados para oferecer o melhor serviço.
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-secondary mt-0.5 mr-3 shrink-0"
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
                  <div>
                    <span className="font-semibold">Atendimento 24h:</span> Estamos disponíveis 24 horas para atender suas emergências no bairro {neighborhoodData.name}.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Também atendemos outros bairros próximos:</h2>
              
              <div className="flex flex-wrap gap-3">
                {neighborhoodData.nearby.map((nearbyNeighborhood) => {
                  const nearby = neighborhoods[nearbyNeighborhood as keyof typeof neighborhoods];
                  return nearby ? (
                    <Link
                      key={nearbyNeighborhood}
                      to={`/bairros/${nearbyNeighborhood}`}
                      className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700"
                    >
                      {nearby.name}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title={`Precisa de serviços residenciais no bairro ${neighborhoodData.name}?`}
        description="Entre em contato agora mesmo e solicite um orçamento sem compromisso. Nossos profissionais estão prontos para atender sua necessidade."
        buttonText="Chamar no WhatsApp"
        buttonLink={`https://wa.me/5531987316012?text=Olá!%20Preciso%20de%20um%20serviço%20no%20bairro%20${encodeURIComponent(neighborhoodData.name)}.%20Vim%20pelo%20site.`}
      />
    </Layout>
  );
};

export default NeighborhoodPage;
