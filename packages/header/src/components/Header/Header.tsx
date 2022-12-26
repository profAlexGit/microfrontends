import React from 'react';
import styles from './header.module.scss';
// @ts-ignore
import navigationConfig from 'navigationConfig/navigationConfig'
import {NavLink} from "react-router-dom";
// @ts-ignore
import useAuth from 'store/useAuth';

export const Header: React.FC = () => {
    const {isAuth, role, login, logout} = useAuth();
    
    const activeStyle = {
        textDecoration: 'underline',
        color: 'tomato'
    }
    
    return <header className={styles.header}>
        <p>header App!!!!</p>
        <nav className={styles.navigation}>
            {navigationConfig.config.map((item: any) => {
                if (item.authRequired && !isAuth) {
                    return;
                }
                return <NavLink
                  className={styles.navigationItem}
                  style={({isActive}) => isActive ? activeStyle : undefined }
                  to={item.path}
                  key={item.path}
                >
                    {item.title}
                </NavLink>
            })}
        </nav>
        
        <button onClick={() => login('admin')}>login</button>
        <button onClick={logout}>logout</button>
    </header>
}

export default Header;
