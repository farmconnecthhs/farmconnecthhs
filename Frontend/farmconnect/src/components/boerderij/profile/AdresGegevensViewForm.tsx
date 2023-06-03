import React from 'react';

import { Adresgegevens } from '../editor/interfaces/Adresgegevens';

import styles from './Profiel.module.css';

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
    <div className={`card col margin_s ${styles.container}`}>
      <h2 className={styles.title}>Adresgegevens</h2>
      <div className={styles.row}>
        <label htmlFor="straatnaam" className={styles.label}>
          Straatnaam:
        </label>
        <span className={styles.value}>{streetName}</span>
      </div>
      <div className={styles.row}>
        <label htmlFor="huisnummer" className={styles.label}>
          Huisnummer:
        </label>
        <span className={styles.value}>{houseNumber}</span>
      </div>
      <div className={styles.row}>
        <label htmlFor="postcode" className={styles.label}>
          Postcode:
        </label>
        <span className={styles.value}>{postalCode}</span>
      </div>
      <div className={styles.row}>
        <label htmlFor="stad" className={styles.label}>
          Stad:
        </label>
        <span className={styles.value}>{city}</span>
      </div>
    </div>
  );
};

export default ViewForm;
