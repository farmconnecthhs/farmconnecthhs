'use client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Betaalmethodes } from '@/components/boerderij/editor/interfaces/Betaalmethodes';
import {
  defaultOpeningstijden,
  Openingstijden,
} from '@/components/boerderij/editor/interfaces/Openingstijden';
import AdresGegevensViewForm from '@/components/boerderij/profile/AdresGegevensViewForm';
import BetaalmethodesViewForm from '@/components/boerderij/profile/BetaalmethodesViewForm';
import OpeningstijdenViewForm from '@/components/boerderij/profile/OpeningstijdenViewForm';

const BoerderijPage: NextPage = () => {
  const [openingstijden] = useState<Openingstijden>(defaultOpeningstijden);
  const [betaalmethodes] = useState<Betaalmethodes>({
    pin: false,
    contant: true,
  });
  const [farmData, setFarmData] = useState<any>(null);

  useEffect(() => {
    const fetchFarmData = async () => {
      try {
        const response = await fetch(
          'http://localhost:3001/api/v1/farmProfiles/'
        );
        const data = await response.json();
        setFarmData(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchFarmData();
  }, []);

  if (!farmData) {
    return <div>Loading...</div>;
  }

  const { adresgegevens } = farmData;

  return (
    <div>
      <h1>Boerderij</h1>
      <div className="AdresgegevensContainer">
        <AdresGegevensViewForm adresgegevens={adresgegevens} />
      </div>
      <div className="OpeningstijdenContainer">
        <OpeningstijdenViewForm openingstijden={openingstijden} />
      </div>
      <div className="BetaalmethodesContainer">
        <BetaalmethodesViewForm betaalmethodes={betaalmethodes} />
      </div>
    </div>
  );
};

export default BoerderijPage;
