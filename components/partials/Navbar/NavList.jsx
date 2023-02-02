import React from 'react';

const NavList = ({ data }) => {
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
