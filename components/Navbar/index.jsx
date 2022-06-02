import React from 'react';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import styles from './Navbar.module.scss';
import { MAIN_PAGE_FOR_ME } from '../../paths';
import Icon from '../../icons';

const Navbar = () => {
    const navbarItems = [
        { id: '#about', title: 'About' },
        { id: '#chapters', title: 'Chapters' },
        { id: '#reviews', title: 'Reviews' },
        { id: '#author', title: 'Author' },
        { id: '#contact', title: 'Contact' },
    ];

    const handleSignIn = (e) => {
        e.preventDefault();
        signIn('github');
    };

    const handleSignOut = (e) => {
        e.preventDefault();
        signOut();
    };

    return (
        <div className={styles.navbarWrapper}>
            <div className={'container'}>
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
                    <div className={styles.navbar}>
                        <ul className={styles.list}>
                            {navbarItems.map((navItem) => (
                                <li
                                    key={navItem.id}
                                    className={styles.listItem}
                                >
                                    {navItem.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.btnSection}>
                        <Link href='/api/auth/signin'>
                            <a
                                className='signinBtn'
                                onClick={(e) => handleSignIn(e)}
                            >
                                Sign In
                            </a>
                        </Link>
                        <Link href='/api/auth/signout'>
                            <a
                                className='signinBtn'
                                onClick={(e) => handleSignOut(e)}
                            >
                                Sign Out
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
