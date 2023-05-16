'use client';
import { NextPage } from 'next';
import React from 'react';

import styles from './page.module.css';

import FarmCardView from '@/components/card/FarmCardView';
import MapComponent from '@/components/kaart/MapComponent';

const KaartPagina: NextPage = () => {
  return (
    <div className={styles['main-container']}>
      <MapComponent />
      <div className={styles['card-container']}>
        <FarmCardView />
      </div>
    </div>
  );
};

export default KaartPagina;
