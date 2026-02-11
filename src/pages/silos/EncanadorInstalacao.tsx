import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const EncanadorInstalacao: React.FC = () => {
  const silo = getSiloBySlug('encanador')!;
  const child = getChildBySlug('encanador', 'instalacao-hidraulica')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default EncanadorInstalacao;
