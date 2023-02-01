import React from 'react';
import styles from './Footer.module.scss';
import socialIconsItems from '../../../data/socialIconsItems';
import NavbarItems from '../../partials/Navbar/NavbarItems';
import Copyright from '../Footer/Copyright';
import SocialIconsItems from '../Footer/SocialIconsItems';

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className='container'>
                <div className={styles.footer}>
                    <div className={styles.top}>
                        <NavbarItems
                            classNameUl={styles.list}
                            classNameLi={styles.listItem}
                        />
                    </div>
                    <div className={styles.bottom}>
                        <SocialIconsItems socialIconsItems={socialIconsItems} />
                        <Copyright />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
