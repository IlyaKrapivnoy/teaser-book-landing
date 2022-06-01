export type IconDimensions = {
    width: string | number;
    height: string | number;
};

export interface IIcon {
    name?: string;
    fill?: string;
    dimensions?: IconDimensions;
    className?: string;
    onClick?: () => void;
}
