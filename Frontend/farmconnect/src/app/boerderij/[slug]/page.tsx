// noinspection TypeScriptValidateTypes

import { NextPage } from 'next';

import { Adresgegevens } from '@/components/boerderij/editor/interfaces/Adresgegevens';
import { Betaalmethodes } from '@/components/boerderij/editor/interfaces/Betaalmethodes';
import { Openingstijden } from '@/components/boerderij/editor/interfaces/Openingstijden';
import { Profiel } from '@/components/boerderij/editor/interfaces/Profiel';
import AdresGegevensViewForm from '@/components/boerderij/profile/AdresGegevensViewForm';
import BetaalmethodesViewForm from '@/components/boerderij/profile/BetaalmethodesViewForm';
import OpeningstijdenViewForm from '@/components/boerderij/profile/OpeningstijdenViewForm';

interface Params {
  slug: string;
}

const BoerderijPage: NextPage = async ({ params }: { params: Params }) => {
  const fetchProfileData = async () => {
    const response = await fetch(
      `http://localhost:3001/api/v1/farmProfiles/${params.slug}`
    );
    return await response.json();
  };
  const combinedData = await fetchProfileData();

  const adresgegevens =  combinedData as Adresgegevens;
  const betaalmethodes = combinedData as Betaalmethodes;
  const profiel = combinedData as Profiel;
  const businessHours = profiel.BusinessHours;


  return (
    <div>
      <h1>Boerderij</h1>
      <div className="AdresgegevensContainer">
        <AdresGegevensViewForm adresgegevens={adresgegevens} />
      </div>
      <div className="OpeningstijdenContainer">
        <OpeningstijdenViewForm openingstijden={businessHours} />
      </div>
      <div className="Betaalmogelijkheden">
        <BetaalmethodesViewForm betaalmethodes={betaalmethodes} />
      </div>
    </div>
  );
};

export default BoerderijPage;
