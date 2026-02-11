import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const DesentupimentoTubulacao: React.FC = () => {
  const silo = getSiloBySlug('desentupimento')!;
  const child = getChildBySlug('desentupimento', 'limpeza-tubulacao')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default DesentupimentoTubulacao;
