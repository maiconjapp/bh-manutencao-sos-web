import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import LocationMap from '../components/LocationMap';
import Breadcrumbs from '../components/Breadcrumbs';

const Contact: React.FC = () => {
  return (
    <Layout>
      <Breadcrumbs items={[{ label: 'Contato' }]} />
      
      <HeroSection
        title="Entre em Contato"
        subtitle="Fale conosco para orçamentos, dúvidas ou agendamento de serviços"
        ctaText="Chamar no WhatsApp"
        ctaLink="https://wa.me/5531987316012?text=Olá!%20Vim%20pelo%20site%20e%20preciso%20de%20um%20serviço."
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Envie sua solicitação</h2>
                <p className="text-gray-600 mb-6">
                  Preencha o formulário abaixo e envie sua solicitação diretamente para nosso WhatsApp.
                  Retornaremos o mais breve possível.
                </p>
                
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      R. Ipê Mirim, 550 - Etelvina Carneiro<br />
                      Belo Horizonte - MG, 31746-110
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Telefone/WhatsApp</h3>
                    <p className="text-gray-600">(31) 98731-6012</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600">
                      24 horas por dia, 7 dias por semana<br />
                      Incluindo feriados
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Área de Atendimento</h3>
                    <p className="text-gray-600 mb-4">
                      Atendemos toda Belo Horizonte, com foco especial nas regiões:
                    </p>
                    
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-4 w-4 text-secondary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Pampulha
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-4 w-4 text-secondary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Zona Norte
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-4 w-4 text-secondary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Ouro Preto
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-4 w-4 text-secondary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Castelo
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-4 w-4 text-secondary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Jaraguá
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg
                          className="h-4 w-4 text-secondary mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        E outros
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Nossa Localização</h3>
                    <LocationMap />
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href="https://wa.me/5531987316012?text=Olá!%20Vim%20pelo%20site%20e%20preciso%20de%20um%20serviço."
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                      />
                    </svg>
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
