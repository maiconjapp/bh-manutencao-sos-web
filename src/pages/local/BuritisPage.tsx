import React from 'react';
import LocalPageComponent from '@/components/LocalPage';
import { getLocalBySlug } from '@/data/silos';

const BuritisPage: React.FC = () => {
  const local = getLocalBySlug('buritis')!;
  return <LocalPageComponent local={local} />;
};

export default BuritisPage;
