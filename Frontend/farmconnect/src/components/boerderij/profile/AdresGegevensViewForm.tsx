import React from 'react';

import { Adresgegevens } from '../editor/interfaces/Adresgegevens';

import styles from './OpeningstijdenViewRow.module.css';

interface ViewFormProps {
  adresgegevens: Adresgegevens;
}

const ViewForm: React.FunctionComponent<ViewFormProps> = ({
  adresgegevens,
}) => {
  const {
    streetName: streetName,
    houseNumber: houseNumber,
    postalCode: postalCode,
    city: city,
  } = adresgegevens;

  return (
    <div className={'card col margin_s'}>
      <h2>Adresgegevens</h2>
      <span className={styles.row}>
        <div>Straatnaam: {streetName}</div>
      </span>
      <div>Huisnummer: {houseNumber}</div>
      <div>Postcode: {postalCode}</div>
      <div>Stad: {city}</div>
    </div>
  );
};

export default ViewForm;
