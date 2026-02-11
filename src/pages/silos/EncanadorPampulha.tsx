import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const EncanadorPampulha: React.FC = () => {
  const silo = getSiloBySlug('encanador')!;
  const child = getChildBySlug('encanador', 'pampulha')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default EncanadorPampulha;
