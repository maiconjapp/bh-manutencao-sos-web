import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const EletricistaManutencao: React.FC = () => {
  const silo = getSiloBySlug('eletricista')!;
  const child = getChildBySlug('eletricista', 'manutencao-eletrica')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default EletricistaManutencao;
