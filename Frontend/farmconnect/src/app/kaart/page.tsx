'use client';
import { NextPage } from 'next';
import React from 'react';

import MapComponent from '@/components/kaart/MapComponent';

const KaartPagina: NextPage = () => {
  return <div>{<MapComponent />}</div>;
};

export default KaartPagina;
