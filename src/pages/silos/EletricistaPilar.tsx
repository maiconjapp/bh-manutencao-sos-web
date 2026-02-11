import React from 'react';
import SiloPillarPage from '@/components/SiloPillarPage';
import { getSiloBySlug } from '@/data/silos';

const EletricistaPilar: React.FC = () => {
  const silo = getSiloBySlug('eletricista')!;
  return <SiloPillarPage silo={silo} />;
};

export default EletricistaPilar;
