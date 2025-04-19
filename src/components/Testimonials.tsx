
import React from 'react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Serviço de qualidade e rápido atendimento. Cheguei em casa e tinha um vazamento, em menos de 1 hora o profissional estava aqui e resolveu o problema.",
    author: "João Silva",
    location: "Pampulha, BH",
  },
  {
    id: 2,
    text: "Excelente atendimento quando precisei trocar um chuveiro que queimou. Preço justo e profissional muito educado e competente.",
    author: "Maria Oliveira",
    location: "Castelo, BH",
  },
  {
    id: 3,
    text: "Contratei para desentupir a pia da cozinha, serviço feito com rapidez e qualidade. Super recomendo!",
    author: "Carlos Souza",
    location: "Ouro Preto, BH",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
