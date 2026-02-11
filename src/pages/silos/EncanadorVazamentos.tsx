import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const EncanadorVazamentos: React.FC = () => {
  const silo = getSiloBySlug('encanador')!;
  const child = getChildBySlug('encanador', 'conserto-vazamentos')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default EncanadorVazamentos;
