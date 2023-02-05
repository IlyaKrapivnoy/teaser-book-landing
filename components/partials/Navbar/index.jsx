import React from 'react';
import styles from './Navbar.module.scss';
import NavList from './NavList';
import SignInAndOut from './SignInAndOut';
import NavLogo from './NavLogo';
import navbarItems from '../../../data/bookListItems';

const Navbar = () => (
    <div className={styles.navbarWrapper}>
        <div className='container'>
            <div className={styles.navbar}>
                <NavLogo />
                <NavList data={navbarItems} />
                <SignInAndOut />
            </div>
        </div>
    </div>
);

export default Navbar;
