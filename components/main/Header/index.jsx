import React from 'react';
import styles from './Header.module.scss';
import Logo from './Logo';

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
                        <Logo dimensions={{ height: 24, width: 'auto' }} />
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
                    <div className={styles.socialIcons}>socialIcons</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
