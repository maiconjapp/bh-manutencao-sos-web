
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = "https://i.ibb.co/jkqdHsnX/Conhe-a-a-S-O-S-Manuten-es-Residenciais-Marido-de-Aluguel-BH-Empresa-especializada-em-servi-os-h.jpg"
}) => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-black/50 z-0"
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      />
      <div 
        className="relative z-10 bg-gradient-to-r from-black/60 to-transparent py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">{subtitle}</p>
            <a
              href={ctaLink}
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
      </div>
    </div>
  );
};

export default HeroSection;
