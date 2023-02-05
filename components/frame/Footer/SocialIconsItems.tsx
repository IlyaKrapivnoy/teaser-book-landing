import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Icon from '../../../icons';

interface SocialIconsItemsProps {
    socialIconsItems: {
        href: string;
        logoClassName: string;
        name: string;
        sizes: {
            height: number;
            width: number;
        };
        id: number;
    }[];
}

const SocialIconsItems: React.FC<SocialIconsItemsProps> = ({
    socialIconsItems,
}) => {
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
