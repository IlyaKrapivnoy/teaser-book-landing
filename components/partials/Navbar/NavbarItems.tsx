import React from 'react';
import { NavbarItemsProps } from 'types';
import { navbarItems } from '../../../data/navItems';

const NavbarItems: React.FC<NavbarItemsProps> = ({
    classNameUl,
    classNameLi,
}) => (
    <ul className={classNameUl}>
        {navbarItems.map(({ id, title }) => (
            <li key={id} className={classNameLi}>
                {title}
            </li>
        ))}
    </ul>
);

export default NavbarItems;
