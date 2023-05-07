'use client';
import React, { useState, useEffect } from 'react';

import Map from '@/components/kaart/Map';

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

const Kaart: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div>{isClient && <Map farms={farms} />}</div>;
};

export default Kaart;
