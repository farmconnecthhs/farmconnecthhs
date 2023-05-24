import Link from 'next/link';
import React from 'react';

interface Props {
  style?: React.CSSProperties;
  menuItemStyle?: React.CSSProperties;
  toggleOpen?: () => void;
}

export const MenuItems: React.FunctionComponent<Props> = (props) => {
  const { style, menuItemStyle, toggleOpen } = props;

  return (
    <div style={style}>
      <Link
        style={menuItemStyle}
        className={'nav-item'}
        href={'/'}
        onClick={toggleOpen}
      >
        Home
      </Link>
      <Link
        style={menuItemStyle}
        className={'nav-item'}
        href={'/login'}
        onClick={toggleOpen}
      >
        Login
      </Link>
      <Link
        style={menuItemStyle}
        className={'nav-item'}
        href={'/register'}
        onClick={toggleOpen}
      >
        Register
      </Link>
      <Link
        style={menuItemStyle}
        className={'btn-call_to_action'}
        href={'/boerderij/1/edit'}
        onClick={toggleOpen}
      >
        Meld je boerderij aan
      </Link>
    </div>
  );
};
