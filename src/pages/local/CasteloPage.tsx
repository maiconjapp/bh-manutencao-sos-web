import React from 'react';
import LocalPageComponent from '@/components/LocalPage';
import { getLocalBySlug } from '@/data/silos';

const CasteloPage: React.FC = () => {
  const local = getLocalBySlug('castelo')!;
  return <LocalPageComponent local={local} />;
};

export default CasteloPage;
