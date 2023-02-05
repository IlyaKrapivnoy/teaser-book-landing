import React from 'react';
import navbarItems from '../../../data/navItems';

interface NavbarItemsProps {
    classNameUl: string;
    classNameLi: string;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({
    classNameUl,
    classNameLi,
}) => {
    return (
        <ul className={classNameUl}>
            {navbarItems.map((navItem) => (
                <li key={navItem.id} className={classNameLi}>
                    {navItem.title}
                </li>
            ))}
        </ul>
    );
};

export default NavbarItems;
