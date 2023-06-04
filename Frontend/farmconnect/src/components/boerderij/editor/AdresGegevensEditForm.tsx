import React from 'react';

import { Adresgegevens } from '../editor/interfaces/Adresgegevens';

interface Props {
  setAdresGegevens: (adresGegevens: Adresgegevens) => void;
  adresGegevens: Adresgegevens;
}

const AdresGegevensEditForm: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { setAdresGegevens, adresGegevens } = props;

  /**
   * Change the adresgegevens
   * @param{Adresgegevens} adresGegevens
   */
  function changeAdresGegevens(adresGegevens: Adresgegevens) {
    setAdresGegevens(adresGegevens);
  }

  return (
    <div className={'card col margin_s'}>
      <h2>Bezoekersadres</h2>
      <input
        className={'input'}
        type={'text'}
        placeholder={'adres'}
        onChange={(e) =>
          changeAdresGegevens({ ...adresGegevens, streetName: e.target.value })
        }
      />
      <input
        className={'input'}
        type={'text'}
        placeholder={'postcode'}
        onChange={(e) =>
          changeAdresGegevens({ ...adresGegevens, postalCode: e.target.value })
        }
      />
      <input
        className={'input'}
        type={'text'}
        placeholder={'stad'}
        onChange={(e) =>
          changeAdresGegevens({ ...adresGegevens, city: e.target.value })
        }
      />
    </div>
  );
};

export default AdresGegevensEditForm;
