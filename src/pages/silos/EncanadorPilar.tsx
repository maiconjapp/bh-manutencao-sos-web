import React from 'react';
import SiloPillarPage from '@/components/SiloPillarPage';
import { getSiloBySlug } from '@/data/silos';

const EncanadorPilar: React.FC = () => {
  const silo = getSiloBySlug('encanador')!;
  return <SiloPillarPage silo={silo} />;
};

export default EncanadorPilar;
