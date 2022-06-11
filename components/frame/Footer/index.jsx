import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import Icon from '../../../icons';
import socialIconsItems from '../../../data/socialIconsItems';
import NavbarItems from '../../partials/Navbar/NavbarItems';

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
                        <div className={styles.icons}>
                            {socialIconsItems.map(
                                ({ href, logoClassName, name, sizes, id }) => (
                                    <Link href={href} key={id}>
                                        <a
                                            className={logoClassName}
                                            target='_blank'
                                        >
                                            <Icon name={name} sizes={sizes} />
                                        </a>
                                    </Link>
                                )
                            )}
                        </div>
                        <p className={styles.copyright}>
                            &#169; Copyright Ilya K. All rights reserved{' '}
                            {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
