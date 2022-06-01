import Link from 'next/link';
import React from 'react';
import Icon from '../../icons';
import styles from './Header.module.scss';
import { MAIN_PAGE_FOR_ME } from '../../../paths';

const MainLogo = ({ dimensions }) => {
    const handleLogoClick = () => {
        console.log('logo click');
    };

    return (
        <>
            <Link href={MAIN_PAGE_FOR_ME}>
                <a className={styles.logo}>
                    <Icon
                        name={Icon.LOGO}
                        dimensions={dimensions}
                        onClick={handleLogoClick}
                    />
                </a>
            </Link>
        </>
    );
};

export default MainLogo;
