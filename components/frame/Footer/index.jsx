import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './Footer.module.scss';
import Icon from '../../../icons';
import socialIconsItems from '../../../data/socialIconsItems';
import NavbarItems from '../../partials/Navbar/NavbarItems';
import Copyright from '../Footer/Copyright';

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
                        <div
                            className={cn(
                                'display-flex',
                                'justify-space-between'
                            )}
                        >
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
                        <Copyright />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
