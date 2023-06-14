export type CardUserProps = {
    name: string;
    position: string;
    age: number;
    degree: string;
    image: string;
};
declare const CardUser: ({ name, position, image, age, degree }: CardUserProps) => import("react/jsx-runtime").JSX.Element;
export default CardUser;
