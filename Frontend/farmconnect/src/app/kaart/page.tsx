import { NextPage } from 'next';
import React from 'react';

import FarmCardView from '@/components/card/FarmCardView';
import MapComponent from '@/components/kaart/MapComponent';

const KaartPagina: NextPage = () => {
  return (
    <div>
      <MapComponent />
      <FarmCardView />
    </div>
  );
};

export default KaartPagina;
