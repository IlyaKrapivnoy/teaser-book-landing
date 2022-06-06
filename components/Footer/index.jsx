import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import Navbar from '../Navbar';
import { MAIN_PAGE_FOR_ME } from '../../paths';
import Icon from '../../icons';

const logoItems = [
    {
        id: 1,
        href: MAIN_PAGE_FOR_ME,
        logoClassName: 'styles.logo',
        name: Icon.SNAPCHAT,
        sizes: { height: 40, width: 'auto' },
    },
    {
        id: 2,
        href: MAIN_PAGE_FOR_ME,
        logoClassName: 'styles.logo',
        name: Icon.FACEBOOK,
        sizes: { height: 40, width: 'auto' },
    },
    {
        id: 3,
        href: MAIN_PAGE_FOR_ME,
        logoClassName: 'styles.logo',
        name: Icon.LINKEDIN,
        sizes: { height: 40, width: 'auto' },
    },
    {
        id: 4,
        href: MAIN_PAGE_FOR_ME,
        logoClassName: 'styles.logo',
        name: Icon.SKYPE,
        sizes: { height: 40, width: 'auto' },
    },
    {
        id: 5,
        href: MAIN_PAGE_FOR_ME,
        logoClassName: 'styles.logo',
        name: Icon.TWITTER,
        sizes: { height: 40, width: 'auto' },
    },
];

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
                    <div className={styles.bottom}>
                        {logoItems.map(
                            ({ href, logoClassName, name, sizes, id }) => (
                                <Link href={href} key={id}>
                                    <a className={logoClassName}>
                                        <Icon name={name} sizes={sizes} />
                                    </a>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
