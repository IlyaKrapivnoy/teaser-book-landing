import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { MAIN_PAGE_FOR_ME } from '../../paths';
import Icon from '../../icons';

const Header = () => {
    const navbarItems = [
        { id: '#about', title: 'About' },
        { id: '#chapters', title: 'Chapters' },
        { id: '#reviews', title: 'Reviews' },
        { id: '#author', title: 'Author' },
        { id: '#contact', title: 'Contact' },
    ];

    return (
        <div className={styles.headerWrapper}>
            <div className={'container'}>
                <div className={styles.header}>
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
                        <button className='loginBtn'>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
