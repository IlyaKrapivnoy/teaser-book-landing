import React from 'react';
import { NavListProps } from 'types';
import styles from './Navbar.module.scss';

const NavList: React.FC<NavListProps> = ({ data }) => (
    <div className={styles.navbar}>
        <ul className={styles.list}>
            {data?.map(({ id, title }) => (
                <li key={id} className={styles.listItem}>
                    {title}
                </li>
            ))}
        </ul>
    </div>
);

export default NavList;
