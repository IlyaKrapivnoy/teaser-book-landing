import React from 'react';
import { NavbarItemsProps } from 'types';
import { navbarItems } from '../../../data/navItems';

const NavbarItems: React.FC<NavbarItemsProps> = ({
    classNameUl,
    classNameLi,
}) => (
    <ul className={classNameUl}>
        {navbarItems.map((navItem) => (
            <li key={navItem.id} className={classNameLi}>
                {navItem.title}
            </li>
        ))}
    </ul>
);


export default NavbarItems;
