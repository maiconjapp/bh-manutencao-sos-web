
import React from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          <a
            href={buttonLink}
            className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
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
  );
};

export default CTASection;
