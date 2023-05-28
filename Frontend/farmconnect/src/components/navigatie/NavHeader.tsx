'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import styles from './NavHeader.module.css';

import { Hamburger } from '@/components/navigatie/Hamburger';
import { MenuItems } from '@/components/navigatie/MenuItems';
import { TopDrawer } from '@/components/navigatie/TopDrawer';

const NavHeader: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const menuStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '1rem',
  };
  const menuItemStyle = {
    margin: '0 1rem',
  };

  /**
   * Toggles the open state of the drawer
   */
  function toggleDrawer() {
    console.log('toggleDrawer');
    setOpen(!open);
  }

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          setOpen(false);
        }
      });
    }
  }, []);

  return (
    <nav>
      <div className={styles['nav-header']}>
        <h1 className={styles['nav-logo']}>
          <Link href={'/'}>FarmConnect </Link>
        </h1>

        <div className={styles['nav-items']}>
          <MenuItems style={menuStyle} menuItemStyle={menuItemStyle} />
        </div>
        <div className={styles.burger}>
          <Hamburger toggleOpen={toggleDrawer} />
        </div>
      </div>
      <TopDrawer open={open} toggleOpen={toggleDrawer} />
    </nav>
  );
};

export default NavHeader;
