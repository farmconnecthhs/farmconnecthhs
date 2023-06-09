import React from 'react';

import styles from './Hamburger.module.css';

interface Props {
  toggleOpen: () => void;
}

export const Hamburger: React.FunctionComponent<Props> = (props: Props) => {
  const { toggleOpen } = props;

  return (
    <div onClick={toggleOpen} className={styles['menu-icon']}>
      <span></span>
    </div>
  );
};
