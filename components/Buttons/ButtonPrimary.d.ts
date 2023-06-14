import { IconTypes } from '../Icon/Icon';
export interface Props {
    text: string;
    color?: 'primary' | 'secondary';
    showIcon?: boolean;
    iconType?: IconTypes;
    onClick?: () => void;
}
export declare const colorClassNames: {
    primary: string;
    secondary: string;
};
export declare const Icons: {
    face: import("react/jsx-runtime").JSX.Element;
};
declare const ButtonPrimary: ({ color, text, showIcon, iconType, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default ButtonPrimary;
