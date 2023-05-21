import dynamic from 'next/dynamic';
import React from 'react';

import { FarmProfile } from '@/components/kaart/interfaces/FarmData';

interface MapProps {
  farmProfiles: FarmProfile[];
}

const MapComponent: React.FC<MapProps> = ({ farmProfiles }) => {
  const Map = dynamic(() => import('@/components/kaart/Map'), {
    loading: () => <>Kaart is aan het laden</>,
    ssr: false,
  });
  return <Map farmProfiles={farmProfiles} />;
};

export default MapComponent;
