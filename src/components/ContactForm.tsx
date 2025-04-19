
import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [description, setDescription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const whatsappText = encodeURIComponent(
      `Olá! Meu nome é ${name}. Estou no bairro ${neighborhood} e preciso do serviço de ${serviceType}. Detalhes: ${description}`
    );
    
    const whatsappUrl = `https://wa.me/5531987316012?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setName('');
      setWhatsapp('');
      setNeighborhood('');
      setServiceType('');
      setDescription('');
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {formSubmitted ? (
        <div className="text-center py-8">
          <div className="text-green-500 mb-4">
            <svg 
              className="h-16 w-16 mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
          <p className="text-gray-600">
            Você será redirecionado para o WhatsApp para completar seu pedido.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">
              WhatsApp
            </label>
            <input
              type="tel"
              id="whatsapp"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="(31) 00000-0000"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="neighborhood" className="block text-gray-700 font-medium mb-2">
              Bairro
            </label>
            <input
              type="text"
              id="neighborhood"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">
              Tipo de Serviço
            </label>
            <select
              id="serviceType"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="Conserto hidráulico">Conserto hidráulico</option>
              <option value="Desentupimento">Desentupimento</option>
              <option value="Serviço elétrico">Serviço elétrico</option>
              <option value="Instalação">Instalação</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Descrição do Problema
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-4 rounded-md shadow-md transition-colors"
          >
            Enviar para WhatsApp
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
