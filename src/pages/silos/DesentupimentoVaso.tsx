import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const DesentupimentoVaso: React.FC = () => {
  const silo = getSiloBySlug('desentupimento')!;
  const child = getChildBySlug('desentupimento', 'vaso-sanitario')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default DesentupimentoVaso;
