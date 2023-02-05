import React from 'react';

interface NavItem {
    id: number;
    title: string;
}

interface Props {
    data: NavItem[];
}

const NavList: React.FC<Props> = ({ data }) => {
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
