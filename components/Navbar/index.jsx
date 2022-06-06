import React from 'react';
import navbarItems from '../../data/navItems';

const Navbar = ({ classNameUl, classNameLi }) => {
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

export default Navbar;
