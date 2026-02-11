import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const EletricistaChuveiro: React.FC = () => {
  const silo = getSiloBySlug('eletricista')!;
  const child = getChildBySlug('eletricista', 'instalacao-chuveiro')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default EletricistaChuveiro;
