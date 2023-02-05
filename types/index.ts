export type IconDimensions = {
    width: string | number;
    height: string | number;
};

export interface IIcon {
    name?: string;
    fill?: string;
    sizes?: IconDimensions;
    className?: string;
    onClick?: () => void;
}

export interface SocialIconsItemsProps {
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

export type BookListItemProps = {
    title: string;
    description: string;
};

export interface ButtonProps {
    className: string;
    title: string;
    onClick: () => void;
}

export interface NavbarItemsProps {
    classNameUl: string;
    classNameLi: string;
}

export interface NavItem {
    id: number;
    title: string;
}

export interface NavListProps {
    data: NavItem[];
}