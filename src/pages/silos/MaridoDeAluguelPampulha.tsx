import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const MaridoDeAluguelPampulha: React.FC = () => {
  const silo = getSiloBySlug('marido-de-aluguel')!;
  const child = getChildBySlug('marido-de-aluguel', 'pampulha')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default MaridoDeAluguelPampulha;
