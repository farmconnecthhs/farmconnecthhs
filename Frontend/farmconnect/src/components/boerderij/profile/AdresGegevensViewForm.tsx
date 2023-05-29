import React from 'react';

import { Adresgegevens } from '../editor/interfaces/Adresgegevens';

interface ViewFormProps {
  adresgegevens: Adresgegevens;
}

const ViewForm: React.FC<ViewFormProps> = ({ adresgegevens }) => {
  const {
    address: address,
    postalCode: postalCode,
    city: city,
  } = adresgegevens;

  return (
    <div className={'card col margin_s'}>
      <h2>Adresgegevens</h2>
      <div>Adres: {address}</div>
      <div>Postcode: {postalCode}</div>
      <div>Stad: {city}</div>
    </div>
  );
};

export default ViewForm;
