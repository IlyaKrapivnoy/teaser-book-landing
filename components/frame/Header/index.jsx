import React from 'react';
import styles from './Header.module.scss';
import NavbarItems from '../../partials/Navbar/NavbarItems';
import MailLogo from './MailLogo';
import LogIn from './LogIn';

const Header = () => (
    <div className={styles.headerWrapper}>
        <div className='container'>
            <div className={styles.header}>
                <MailLogo />
                <NavbarItems
                    classNameUl={styles.list}
                    classNameLi={styles.listItem}
                />
                <LogIn />
            </div>
        </div>
    </div>
);

export default Header;
