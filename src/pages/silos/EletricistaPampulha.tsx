import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const EletricistaPampulha: React.FC = () => {
  const silo = getSiloBySlug('eletricista')!;
  const child = getChildBySlug('eletricista', 'pampulha')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default EletricistaPampulha;
