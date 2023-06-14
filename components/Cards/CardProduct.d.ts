export type ProductProps = {
    title: string;
    description: string;
    price: number;
    image: string;
};
declare const CardProduct: ({ title, description, price, image }: ProductProps) => import("react/jsx-runtime").JSX.Element;
export default CardProduct;
