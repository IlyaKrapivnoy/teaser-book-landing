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
