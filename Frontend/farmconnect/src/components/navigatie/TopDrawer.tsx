import React from 'react';

import styles from './TopDrawer.module.css';

import { MenuItems } from '@/components/navigatie/MenuItems';

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

export const TopDrawer: React.FunctionComponent<Props> = (props) => {
  const { open, toggleOpen } = props;
  const [style, setStyle] = React.useState({ transform: 'translateY(-10rem)' });

  const menuStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '1rem',
  };
  const menuItemStyle = {
    margin: '1rem 1rem',
  };

  React.useEffect(() => {
    if (open) {
      setStyle({ transform: 'translateY(9rem)' });
    } else {
      setStyle({ transform: 'translateY(-10rem)' });
    }
  }, [open]);

  function toggleDrawer() {
    console.log('toggleDrawer');
  }

  return (
    <div className={styles['top-drawer']} style={style}>
      <MenuItems
        style={menuStyle}
        menuItemStyle={menuItemStyle}
        burger={true}
        toggleOpen={toggleOpen}
      />
    </div>
  );
};
