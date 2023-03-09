import React from 'react';
import Link from 'next/link';
import Icon from '../../../icons';
import { MAIN_PAGE_FOR_ME } from '../../../paths';
import styles from './Navbar.module.scss';

const NavLogo = () => (
    <div className={styles.logo}>
        <Link href={MAIN_PAGE_FOR_ME}>
            <a className={styles.logo}>
                <Icon name={Icon.LOGO} sizes={{ height: 24, width: 'auto' }} />
            </a>
        </Link>
    </div>
);

export default NavLogo;
