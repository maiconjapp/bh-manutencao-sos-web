import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const DesentupimentoPampulha: React.FC = () => {
  const silo = getSiloBySlug('desentupimento')!;
  const child = getChildBySlug('desentupimento', 'pampulha')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default DesentupimentoPampulha;
