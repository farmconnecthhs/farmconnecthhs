import React from 'react';

import styles from './OpeningstijdenFormRow.module.css';

import { Openingstijd } from '@/components/boerderij/editor/interfaces/Openingstijd';

interface OpeningstijdFormRowProps {
  openingstijd: Openingstijd;
  onChangeOpeningstijd: (openingstijd: Openingstijd) => void;
}

const OpeningstijdFormRow: React.FunctionComponent<OpeningstijdFormRowProps> = (
  props: OpeningstijdFormRowProps
) => {
  const { openingstijd, onChangeOpeningstijd } = props;
  return (
    <div key={openingstijd.day} className={'row row_align_center'}>
      <div className={styles['label-mono']}>{openingstijd.day}</div>
      <input
        className={'input_type_time'}
        type={'time'}
        placeholder={'0'}
        disabled={openingstijd.closed}
        onChange={(event) => {
          const newOpeningstijd = openingstijd;
          newOpeningstijd.openTime = new Date(event.target.value);
          onChangeOpeningstijd(newOpeningstijd);
        }}
      />
      -
      <input
        className={'input_type_time'}
        type={'time'}
        placeholder={'0'}
        disabled={openingstijd.closed}
        onChange={(event) => {
          const newOpeningstijd = openingstijd;
          newOpeningstijd.closeTime = new Date(event.target.value);
          onChangeOpeningstijd(newOpeningstijd);
        }}
      />
      <div className={styles['label-spacing']}>Gesloten</div>
      <input
        className={'input_type_toggle'}
        type={'checkbox'}
        defaultChecked={openingstijd.closed}
        onChange={(event) => {
          const newOpeningstijd = openingstijd;
          newOpeningstijd.closed = event.target.checked;
          onChangeOpeningstijd(newOpeningstijd);
        }}
      />
    </div>
  );
};

export default OpeningstijdFormRow;
