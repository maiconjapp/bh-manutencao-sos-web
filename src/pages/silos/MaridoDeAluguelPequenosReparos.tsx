import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const MaridoDeAluguelPequenosReparos: React.FC = () => {
  const silo = getSiloBySlug('marido-de-aluguel')!;
  const child = getChildBySlug('marido-de-aluguel', 'pequenos-reparos')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default MaridoDeAluguelPequenosReparos;
