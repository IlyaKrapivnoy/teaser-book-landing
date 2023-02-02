import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { MAIN_PAGE_FOR_ME } from '../../../paths';
import Icon from '../../../icons';
import NavList from './NavList';
import SignInAndOut from './SignInAndOut';

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
                    <div className={styles.logo}>
                        <Link href={MAIN_PAGE_FOR_ME}>
                            <a className={styles.logo}>
                                <Icon
                                    name={Icon.LOGO}
                                    sizes={{ height: 24, width: 'auto' }}
                                />
                            </a>
                        </Link>
                    </div>
                    <NavList data={navbarItems} />
                    <SignInAndOut />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
