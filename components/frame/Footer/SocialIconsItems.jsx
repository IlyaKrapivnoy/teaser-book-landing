import React from 'react';
import Link from 'next/link';
import Icon from '../../../icons';

const SocialIconsItems = ({ socialIconsItems }) => {
    return (
        <div className={cn('display-flex', 'justify-space-between')}>
            {socialIconsItems.map(
                ({ href, logoClassName, name, sizes, id }) => (
                    <Link href={href} key={id}>
                        <a className={logoClassName} target='_blank'>
                            <Icon name={name} sizes={sizes} />
                        </a>
                    </Link>
                )
            )}
        </div>
    );
};

export default SocialIconsItems;
