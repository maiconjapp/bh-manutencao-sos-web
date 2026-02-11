import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const DesentupimentoRalo: React.FC = () => {
  const silo = getSiloBySlug('desentupimento')!;
  const child = getChildBySlug('desentupimento', 'ralo')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default DesentupimentoRalo;
