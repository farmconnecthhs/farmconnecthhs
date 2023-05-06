import React from "react";

import Link from "next/link";

interface Props {
    style?: React.CSSProperties;
    menuItemStyle?: React.CSSProperties;
}
export const MenuItems: React.FunctionComponent<Props> = (props ) => {
    const {style, menuItemStyle} = props;

    return (
        <div style={style}>
            <Link style={menuItemStyle} className={'nav-item'} href={"/"}>Kaart</Link>
            <Link style={menuItemStyle} className={'nav-item'} href={"/auth/login"}>Login</Link>
            <Link style={menuItemStyle} className={'nav-item'} href={"/auth/register"}>Register</Link>
            <Link style={menuItemStyle} className={'btn-call_to_action'} href={"/dashboard"}>Meld je boerderij
                aan</Link>
        </div>
    )
}