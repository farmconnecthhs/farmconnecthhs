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
    name: 'Bloeiende Akkers Landgoed',
  },
  {
    id: 4,
    latitude: 51.9222,
    longitude: 4.4805,
    name: 'Waterkant Boerderij',
  },
  {
    id: 5,
    latitude: 52.0909,
    longitude: 5.1057,
    name: 'Windmolen Gaard',
  },
  {
    id: 6,
    latitude: 52.3729,
    longitude: 4.6561,
    name: 'Kustlijn Hoeve',
  },
  {
    id: 7,
    latitude: 53.2223,
    longitude: 6.5674,
    name: 'Groninger Velden Landgoed',
  },
  {
    id: 8,
    latitude: 51.4416,
    longitude: 5.4697,
    name: 'Brabantse Heide Boerderij',
  },
  {
    id: 9,
    latitude: 52.5063,
    longitude: 6.0819,
    name: 'Twentse Akkers Gaard',
  },
  {
    id: 10,
    latitude: 51.9851,
    longitude: 5.8987,
    name: 'Gelderse Landgoed',
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
