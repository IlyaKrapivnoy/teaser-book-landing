import React from 'react';
import styles from './Navbar.module.scss';
import NavList from './NavList';
import SignInAndOut from './SignInAndOut';
import NavLogo from './NavLogo';

const Navbar = () => {
    const navbarItems = [
        { id: '#about', title: 'About' },
        { id: '#chapters', title: 'Chapters' },
        { id: '#reviews', title: 'Reviews' },
        { id: '#author', title: 'Author' },
        { id: '#contact', title: 'Contact' },
    ];

    return (
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
};

export default Navbar;
