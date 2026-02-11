import React from 'react';
import LocalPageComponent from '@/components/LocalPage';
import { getLocalBySlug } from '@/data/silos';

const SavassiPage: React.FC = () => {
  const local = getLocalBySlug('savassi')!;
  return <LocalPageComponent local={local} />;
};

export default SavassiPage;
