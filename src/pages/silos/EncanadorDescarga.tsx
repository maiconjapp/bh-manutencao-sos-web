import React from 'react';
import SiloChildPage from '@/components/SiloChildPage';
import { getSiloBySlug, getChildBySlug } from '@/data/silos';

const EncanadorDescarga: React.FC = () => {
  const silo = getSiloBySlug('encanador')!;
  const child = getChildBySlug('encanador', 'conserto-descarga')!;
  return <SiloChildPage silo={silo} child={child} />;
};

export default EncanadorDescarga;
