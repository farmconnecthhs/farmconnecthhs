import Link from 'next/link';
import React from 'react';

interface Props {
  style?: React.CSSProperties;
  menuItemStyle?: React.CSSProperties;
}

export const MenuItems: React.FunctionComponent<Props> = (props) => {
  const { style, menuItemStyle } = props;

  return (
    <div style={style}>
      <Link style={menuItemStyle} className={'nav-item'} href={'/kaart'}>
        Kaart
      </Link>
      <Link style={menuItemStyle} className={'nav-item'} href={'/auth/login'}>
        Login
      </Link>
      <Link style={menuItemStyle} className={'nav-item'} href={'/register'}>
        Register
      </Link>
      <Link
        style={menuItemStyle}
        className={'btn-call_to_action'}
        href={'/dashboard'}
      >
        Meld je boerderij aan
      </Link>
    </div>
  );
};
