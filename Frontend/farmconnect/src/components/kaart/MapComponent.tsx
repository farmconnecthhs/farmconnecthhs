import dynamic from 'next/dynamic';
import React from 'react';

const farms = [
  {
    id: 1,
    latitude: 52.3783,
    longitude: 4.9009,
    name: 'Farm 1',
  },
  {
    id: 2,
    latitude: 52.4783,
    longitude: 4.8009,
    name: 'Farm 2',
  },
  {
    id: 3,
    latitude: 52.2783,
    longitude: 4.7009,
    name: 'Farm 3',
  },
];

const MapComponent: React.FunctionComponent = () => {
  const Map = dynamic(() => import('@/components/kaart/Map'), {
    loading: () => <>Kaart is aan het laden</>,
    ssr: false,
  });
  return <Map farms={farms} />;
};

export default MapComponent;
