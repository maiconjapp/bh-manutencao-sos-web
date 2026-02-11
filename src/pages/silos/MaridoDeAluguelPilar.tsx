import React from 'react';
import SiloPillarPage from '@/components/SiloPillarPage';
import { getSiloBySlug } from '@/data/silos';

const MaridoDeAluguelPilar: React.FC = () => {
  const silo = getSiloBySlug('marido-de-aluguel')!;
  return <SiloPillarPage silo={silo} />;
};

export default MaridoDeAluguelPilar;
