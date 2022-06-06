import React from 'react';
import styles from './Footer.module.scss';
import Navbar from '../Navbar';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={'container'}>
                <div className={styles.footer}>
                    <div className={styles.top}>
                        <Navbar
                            classNameUl={styles.list}
                            classNameLi={styles.listItem}
                        />
                    </div>
                    <div className={styles.bottom}></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
