// noinspection TypeScriptValidateTypes

import { NextPage } from 'next';

import { Adresgegevens } from '@/components/boerderij/editor/interfaces/Adresgegevens';
import { Betaalmethodes } from '@/components/boerderij/editor/interfaces/Betaalmethodes';
import { Openingstijden } from '@/components/boerderij/editor/interfaces/Openingstijden';
import AdresGegevensViewForm from '@/components/boerderij/profile/AdresGegevensViewForm';
import BetaalmethodesViewForm from '@/components/boerderij/profile/BetaalmethodesViewForm';
import OpeningstijdenViewForm from '@/components/boerderij/profile/OpeningstijdenViewForm';

interface Params {
  slug: string;
}

const BoerderijPage: NextPage = async ({ params }: { params: Params }) => {
  const fetchAddressData = async () => {
    const response = await fetch(
      `http://localhost:3001/api/v1/farmProfiles/${params.slug}`
    );
    const data = await response.json();
    return data as Adresgegevens;
  };

  const profile = await fetchAddressData();

  const fetchBusinessHoursData = async () => {
    const response = await fetch(
      `http://localhost:3001/api/v1/businesshours/farm/${params.slug}`
    );
    const data = await response.json();
    return data as Openingstijden;
  }
  const businessHours = await fetchBusinessHoursData();

  const fetchPaymentOptions = async () => {
    const response = await fetch(
      `http://localhost:3001/api/v1/farmProfiles/${params.slug}`
    );
    const data = await response.json();
    return data as Betaalmethodes;
  };

  const paymentOptions = await fetchPaymentOptions();

  return (
    <div>
      <h1>Boerderij</h1>
      <div className="AdresgegevensContainer">
        <AdresGegevensViewForm adresgegevens={profile} />
      </div>
      <div className="OpeningstijdenContainer">
        <OpeningstijdenViewForm openingstijden={businessHours} />
      </div>
      <div className="Betaalmogelijkheden">
        <BetaalmethodesViewForm betaalmethodes={paymentOptions} />
      </div>

    </div>
  );
};

export default BoerderijPage;
