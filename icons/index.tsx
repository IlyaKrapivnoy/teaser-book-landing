import React from 'react';

import Logo from '../svgs/logo.svg';

import { IIcon } from '../types';

const LOGO = 'logo';

const Icon = ({ name, fill, sizes, className, onClick }: IIcon) => {
    switch (name) {
        case LOGO:
            return (
                <Logo
                    {...sizes}
                    fill={fill}
                    className={className}
                    onClick={onClick}
                />
            );

        default:
            return null;
    }
};

Icon.displayName = 'Icon';

Icon.LOGO = LOGO;

export default Icon;
