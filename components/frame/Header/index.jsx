import React from 'react';
import styles from './Header.module.scss';
import NavbarItems from '../../partials/Navbar/NavbarItems';
import MailLogo from './MailLogo';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={'container'}>
                <div className={styles.header}>
                    <MailLogo />
                    <NavbarItems
                        classNameUl={styles.list}
                        classNameLi={styles.listItem}
                    />
                    <div className={styles.btnSection}>
                        <button className='loginBtn'>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
