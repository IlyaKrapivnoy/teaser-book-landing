import React from 'react';

import Logo from '../svgs/logo.svg';
import Snapchat from '../svgs/snapchat.svg';
import Facebook from '../svgs/facebook.svg';
import Linkedin from '../svgs/linkedin.svg';
import Skype from '../svgs/skype.svg';
import Twitter from '../svgs/twitter.svg';
import Done from '../svgs/done.svg';

import { IIcon } from '../types';

const LOGO = 'logo';
const SNAPCHAT = 'snapchat';
const FACEBOOK = 'facebook';
const LINKEDIN = 'linkedin';
const SKYPE = 'skype';
const TWITTER = 'twitter';
const DONE = 'done';

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

        case SNAPCHAT:
            return (
                <Snapchat
                    {...sizes}
                    fill={fill}
                    className={className}
                    onClick={onClick}
                />
            );

        case FACEBOOK:
            return (
                <Facebook
                    {...sizes}
                    fill={fill}
                    className={className}
                    onClick={onClick}
                />
            );

        case LINKEDIN:
            return (
                <Linkedin
                    {...sizes}
                    fill={fill}
                    className={className}
                    onClick={onClick}
                />
            );

        case SKYPE:
            return (
                <Skype
                    {...sizes}
                    fill={fill}
                    className={className}
                    onClick={onClick}
                />
            );

        case TWITTER:
            return (
                <Twitter
                    {...sizes}
                    fill={fill}
                    className={className}
                    onClick={onClick}
                />
            );

        case DONE:
            return (
                <Done
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
Icon.SNAPCHAT = SNAPCHAT;
Icon.FACEBOOK = FACEBOOK;
Icon.LINKEDIN = LINKEDIN;
Icon.SKYPE = SKYPE;
Icon.TWITTER = TWITTER;
Icon.DONE = DONE;

export default Icon;
