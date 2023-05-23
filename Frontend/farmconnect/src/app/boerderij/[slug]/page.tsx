// noinspection TypeScriptValidateTypes

import { NextPage } from 'next';

import AdresGegevensViewForm from '@/components/boerderij/profile/AdresGegevensViewForm';

interface Params {
  slug: string;
}

/* @ts-expect-error Async Server Component */
const BoerderijPage: NextPage = async ({ params }: { params: Params }) => {
  const fetchData = async () => {
    console.log(params);
    const response = await fetch(
      `http://localhost:3001/api/v1/farmProfiles/${params.slug}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const profile = await fetchData;

  return (
    <div>
      <h1>Boerderij</h1>
      <div className="AdresgegevensContainer">
        <AdresGegevensViewForm adresgegevens={profile} />
      </div>
    </div>
  );
};

export default BoerderijPage;
