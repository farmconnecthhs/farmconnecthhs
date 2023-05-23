import React from 'react';

import { Adresgegevens } from '../editor/interfaces/Adresgegevens';

interface ViewFormProps {
  adresgegevens: Adresgegevens;
}

const ViewForm: React.FC<ViewFormProps> = ({ adresgegevens }) => {
  if (!adresgegevens) {
    return null;
  }

  const { straat, huisnummer, postcode, stad } = adresgegevens;

  return (
    <div className={'card col margin_s'}>
      <h1>Adresgegevens</h1>
      <div>Straat: {straat}</div>
      <div>Huisnummer: {huisnummer}</div>
      <div>Postcode: {postcode}</div>
      <div>Stad: {stad}</div>
    </div>
  );
};

export default ViewForm;
