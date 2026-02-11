import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const EletricistaDisjuntores: React.FC = () => {
  const silo = getSiloBySlug('eletricista')!;
  const child = getChildBySlug('eletricista', 'troca-disjuntores')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default EletricistaDisjuntores;
