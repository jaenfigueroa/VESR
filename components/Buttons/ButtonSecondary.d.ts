type Color = 'blue' | 'purple';
export declare const ButtonColors: Record<Color, string>;
type Props = {
    text: string;
    color?: Color;
    onClick?: () => void;
};
declare const ButtonSecondary: ({ text, color, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default ButtonSecondary;
