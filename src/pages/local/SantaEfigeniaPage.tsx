import React from 'react';
import LocalPageComponent from '@/components/LocalPage';
import { getLocalBySlug } from '@/data/silos';

const SantaEfigeniaPage: React.FC = () => {
  const local = getLocalBySlug('santa-efigenia')!;
  return <LocalPageComponent local={local} />;
};

export default SantaEfigeniaPage;
