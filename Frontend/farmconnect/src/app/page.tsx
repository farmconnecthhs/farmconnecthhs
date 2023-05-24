import { NextPage } from 'next';
import React from 'react';

import styles from './page.module.css';

import FarmCardView from '@/components/card/FarmCardView';
import MapComponent from '@/components/kaart/MapComponent';

// prettier-ignore
{/* @ts-expect-error Async Server Component */}
const KaartPagina: NextPage = async () => {
  const fetchFarmData = async () => {
    try {
      const response = await fetch(
        'http://localhost:3001/api/v1/farmProfiles/'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
      return [];
    }
  };

  const data = await fetchFarmData();

  return (
    <div className={styles['main-container']}>
      <MapComponent farmProfiles={data} />
      <div className={styles['card-container']}>
        <FarmCardView farmProfiles={data} />
      </div>
    </div>
  );
};

export default KaartPagina;
