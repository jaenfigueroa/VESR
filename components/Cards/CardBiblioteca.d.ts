export type VariantColor = 'red' | 'blue' | 'purple';
export declare const COLORS: Record<VariantColor, string>;
export interface ItemBiblioteca {
    title: string;
    description: string;
    image: string;
}
interface Props extends ItemBiblioteca {
    color: VariantColor;
}
declare const CardBiblioteca: ({ title, description, image, color }: Props) => import("react/jsx-runtime").JSX.Element;
export default CardBiblioteca;
