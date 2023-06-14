type Colors = 'blue' | 'purple';
type Props = {
    direction: 'normal' | 'reverse';
    color: Colors;
    title: string;
    text: string;
    images: string[];
    onClick?: () => void;
};
declare const CardProject: ({ direction, color, title, text, images, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default CardProject;
