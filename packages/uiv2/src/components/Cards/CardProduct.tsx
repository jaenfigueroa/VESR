export type Product = {
  title: string,
  description: string
  price: number,
  image: string
}

type Props = {
  product: Product
}

const CardProduct = ({ product }: Props) => {
  return (
    <article className='vers-bg-purple-500 vers-overflow-hidden vers-rounded-lg vers-drop-shadow-[3px_3px_5px_#f5b4ea] vers-border-solid vers-border-2 vers-border-purple-500'>
      <div className='vers-aspect-square vers-w-full'>
        <img className='vers-h-full vers-w-full vers-object-contain vers-bg-white vers-p-2' src={product.image} alt='' />
      </div>
      <div className='vers-px-4 vers-py-3 sm:vers-pt-4 sm:vers-pb-6 vers-flex vers-flex-col vers-gap-1 sm:vers-gap-2 vers-items-center'>
        <h2 className='vers-text-lg xsm:vers-text-xl vers-font-bold vers-text-white '>{ product.title}</h2>
        <p className='xsm:vers-text-md vers-text-white vers-text-justifyxxxx'>{product.description }</p>
        <div className='vers-flex vers-justify-between vers-w-full vers-items-center'>
          <p className='vers-text-3xl vers-font-bold vers-text-white'>${product.price.toFixed(2)}</p>
          <i className='fa-solid fa-circle-play vers-text-5xl vers-text-white'></i>
        </div>
      </div>
    </article>
  )
}

export default CardProduct