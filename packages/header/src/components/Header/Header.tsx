import React from 'react';
import styles from './header.module.scss';
// @ts-ignore
import navigationConfig from 'navigationConfig/navigationConfig'
import {NavLink} from "react-router-dom";

export const Header: React.FC = () => {
    return <header className={styles.header}>
        <p>header App!!!!</p>
        <nav className={styles.navigation}>
            {navigationConfig.config.map((item: any) => {
                if (item.authRequired) {
                    return;
                }
                return <NavLink
                  className={({isActive}) => isActive ? styles.navigationItem_active : styles.navigationItem}
                  to={item.path}
                  key={item.path}
                >
                    {item.title}
                </NavLink>
            })}
        </nav>
    </header>
}

export default Header;
