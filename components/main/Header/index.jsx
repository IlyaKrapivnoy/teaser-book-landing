import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={'container'}>
                <div className={styles.header}>
                    <div className={styles.logo}>logo</div>
                    <div className={styles.navbar}>nav</div>
                    <div className={styles.socialIcons}>socialIcons</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
