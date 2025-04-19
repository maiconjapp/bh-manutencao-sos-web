
import React from 'react';

const LocationMap = () => {
  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.151743389551!2d-43.934931924559495!3d-19.815743733721153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68fd53eaaaaaaab%3A0x987654321!2sR.%20Ip%C3%AA%20Mirim%2C%20550%20-%20Etelvina%20Carneiro%2C%20Belo%20Horizonte%20-%20MG%2C%2031746-110!5e0!3m2!1spt-BR!2sbr!4v1708644184644!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização S.O.S Manutenções Residenciais"
      />
    </div>
  );
};

export default LocationMap;
