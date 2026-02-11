import React from 'react';
import SiloPillarPage from '@/components/SiloPillarPage';
import { getSiloBySlug } from '@/data/silos';

const DesentupimentoPilar: React.FC = () => {
  const silo = getSiloBySlug('desentupimento')!;
  return <SiloPillarPage silo={silo} />;
};

export default DesentupimentoPilar;
