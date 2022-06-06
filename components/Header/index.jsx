import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { MAIN_PAGE_FOR_ME } from '../../paths';
import Icon from '../../icons';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={'container'}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Link href={MAIN_PAGE_FOR_ME}>
                            <a className={styles.logo}>
                                <Icon
                                    name={Icon.LOGO}
                                    sizes={{ height: 24, width: 'auto' }}
                                />
                            </a>
                        </Link>
                    </div>

                    <Navbar
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
