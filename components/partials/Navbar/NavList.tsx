import React from 'react';
import { NavListProps } from 'types';

const NavList: React.FC<NavListProps> = ({ data }) => {
    return (
        <div className={styles.navbar}>
            <ul className={styles.list}>
                {data?.map((navItem) => (
                    <li key={navItem.id} className={styles.listItem}>
                        {navItem.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavList;
