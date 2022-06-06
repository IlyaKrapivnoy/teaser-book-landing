import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import Navbar from '../Navbar';
import Icon from '../../icons';

const socialIconsItems = [
    {
        id: 1,
        href: 'https://www.snapchat.com/',
        logoClassName: 'styles.socialIcon',
        name: Icon.SNAPCHAT,
        sizes: { height: 40, width: 'auto' },
    },
    {
        id: 2,
        href: 'https://www.facebook.com/',
        logoClassName: 'styles.socialIcon',
        name: Icon.FACEBOOK,
        sizes: { height: 40, width: 'auto' },
    },
    {
        id: 3,
        href: 'https://www.linkedin.com/',
        logoClassName: 'styles.socialIcon',
        name: Icon.LINKEDIN,
        sizes: { height: 40, width: 'auto' },
    },
    {
        id: 4,
        href: 'https://www.skype.com/',
        logoClassName: 'styles.socialIcon',
        name: Icon.SKYPE,
        sizes: { height: 40, width: 'auto' },
    },
    {
        id: 5,
        href: 'https://twitter.com/',
        logoClassName: 'styles.socialIcon',
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
