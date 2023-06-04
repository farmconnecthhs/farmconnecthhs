'use client';
import type { NextPage } from 'next';
import { useState } from 'react';

import AdresGegevensEditForm from '@/components/boerderij/editor/AdresGegevensEditForm';
import BetaalmethodesEditForm from '@/components/boerderij/editor/BetaalmethodesEditForm';
import type { Adresgegevens } from '@/components/boerderij/editor/interfaces/Adresgegevens';
import type { Betaalmethodes } from '@/components/boerderij/editor/interfaces/Betaalmethodes';
import type { Boerderijprofiel } from '@/components/boerderij/editor/interfaces/Boerderijprofiel';
import type { Openingstijd } from '@/components/boerderij/editor/interfaces/Openingstijd';
import {
  defaultOpeningstijden,
  Openingstijden,
} from '@/components/boerderij/editor/interfaces/Openingstijden';
import OpeningstijdenEditForm from '@/components/boerderij/editor/OpeningstijdenEditForm';

const EditFarmProfile: NextPage = () => {
  // TODO: get slug from url and fetch boerderijprofiel from backend
  const [openingstijden, setOpeningstijden] = useState<Openingstijden>(
    defaultOpeningstijden
  );

  const [productenBeschrijving, setProductenBeschrijving] =
    useState<string>('');

  const [adresGegevens, setAdresGegevens] = useState<Adresgegevens>({
    streetName: '',
    houseNumber: '',
    postalCode: '',
    city: '',
  });

  const [betaalmethoden, setBetaalmethoden] = useState<Betaalmethodes>({
    cardPayment: false,
    cashPayment: false,
  });

  const [boerderijNaam, setBoerderijNaam] = useState<string>('');
  const [boerderijWebsiteTekst, setBoerderijWebsiteTekst] =
    useState<string>('');

  const [boerderijprofiel, setBoerderijProfiel] =
    useState<Boerderijprofiel | null>(null);

  /**
   * changes openingstijd in state
   * @param{Openingstijd} openingstijd
   * @constructor
   */
  function changeOpeningstijd(openingstijd: Openingstijd) {
    setOpeningstijden({ ...openingstijden, [openingstijd.day]: openingstijd });
  }

  /**
   * saves profile to backend
   * Currently it just logs the profile to the console
   */
  function saveProfile() {
    const profiel: Boerderijprofiel = {
      boerderijNaam: boerderijNaam,
      boerderijBeschrijving: boerderijWebsiteTekst,
      productenBeschrijving: productenBeschrijving,
      adresgegevens: adresGegevens,
      openingstijden: openingstijden,
      betaalmethodes: betaalmethoden,
    };
    setBoerderijProfiel(profiel);
    // TODO deze vervangen door een api call
    console.log('save profile');
    console.log(JSON.stringify(boerderijprofiel));
  }

  return (
    <div>
      <div className={'content-container'}>
        <h1>Bewerk boerderijprofiel</h1>
        <div className={'row'}>
          <button onClick={() => saveProfile}>Save</button>
        </div>
        <div className={'row row__wrap'}>
          <div className={'card col margin_s'}>
            <h2>Boerderij informatie</h2>
            <input
              className={'input input_large'}
              type={'text'}
              placeholder={'Boerderij naam'}
              value={boerderijNaam}
              onChange={(e) => setBoerderijNaam(e.target.value)}
            />
            <textarea
              className={'input input_large'}
              placeholder={'Boerderij website tekst'}
              value={boerderijWebsiteTekst}
              onChange={(e) => setBoerderijWebsiteTekst(e.target.value)}
            />
            <h2>Producten beschrijving</h2>
            <textarea
              className={'input input_large textarea_smaller'}
              placeholder={'Beschrijving producten'}
              value={productenBeschrijving}
              onChange={(e) => setProductenBeschrijving(e.target.value)}
            />
            {/* TODO gamification elementen uitwerken*/}
          </div>

          <div className={'col'}>
            <AdresGegevensEditForm
              adresGegevens={adresGegevens}
              setAdresGegevens={setAdresGegevens}
            />
            <OpeningstijdenEditForm
              openingstijden={openingstijden}
              changeOpeningstijd={changeOpeningstijd}
            />
            <BetaalmethodesEditForm
              betaalmethodes={betaalmethoden}
              setBetaalmethodes={setBetaalmethoden}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditFarmProfile;
