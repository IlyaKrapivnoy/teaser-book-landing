import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import classNames from 'classnames';
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

    const { data: session, status } = useSession();
    console.log({ data: session, status });

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
                    <div
                        className={classNames(
                            styles.btnSection,
                            !session && status === 'loading'
                                ? styles.loading
                                : styles.loaded
                        )}
                    >
                        {!session && status !== 'authenticated' && (
                            <Link href='/api/auth/signin'>
                                <a
                                    className='signinBtn'
                                    onClick={(e) => handleSignIn(e)}
                                >
                                    Sign In
                                </a>
                            </Link>
                        )}
                        {session && status !== 'unauthenticated' && (
                            <Link href='/api/auth/signout'>
                                <a
                                    className='signinBtn'
                                    onClick={(e) => handleSignOut(e)}
                                >
                                    Sign Out
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
