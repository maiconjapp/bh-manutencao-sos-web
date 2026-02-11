import React from 'react';
import LocalPageComponent from '@/components/LocalPage';
import { getLocalBySlug } from '@/data/silos';

const PampulhaPage: React.FC = () => {
  const local = getLocalBySlug('pampulha')!;
  return <LocalPageComponent local={local} />;
};

export default PampulhaPage;
