import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppInlineButtonProps {
  service?: string;
  neighborhood?: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
}

const WhatsAppInlineButton: React.FC<WhatsAppInlineButtonProps> = ({
  service,
  neighborhood,
  className = '',
  size = 'default'
}) => {
  const createWhatsAppMessage = () => {
    let message = 'Olá! Vi seu artigo no blog e gostaria de solicitar um orçamento';
    
    if (service && neighborhood) {
      message += ` para ${service} em ${neighborhood}`;
    } else if (service) {
      message += ` para ${service}`;
    } else if (neighborhood) {
      message += ` em ${neighborhood}`;
    }
    
    message += '. Pode me ajudar?';
    
    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/5531987316012?text=${createWhatsAppMessage()}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button 
        size={size} 
        className="bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Chamar no WhatsApp
      </Button>
    </a>
  );
};

export default WhatsAppInlineButton;