import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const DesentupimentoPia: React.FC = () => {
  const silo = getSiloBySlug('desentupimento')!;
  const child = getChildBySlug('desentupimento', 'pia')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default DesentupimentoPia;
