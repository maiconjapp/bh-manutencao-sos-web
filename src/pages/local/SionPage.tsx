import React from 'react';
import LocalPageComponent from '@/components/LocalPage';
import { getLocalBySlug } from '@/data/silos';

const SionPage: React.FC = () => {
  const local = getLocalBySlug('sion')!;
  return <LocalPageComponent local={local} />;
};

export default SionPage;
