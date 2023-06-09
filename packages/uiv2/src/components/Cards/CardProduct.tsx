import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export type ProductProps = {
  title: string,
  description: string
  price: number,
  image: string
}

const CardProduct = ({ title='Titulo', description='Descripcion', price=0,image='' }: ProductProps) => {
  return (
    <article className='vers-bg-purple-500 vers-overflow-hidden vers-rounded-lg vers-drop-shadow-[3px_3px_5px_#f5b4ea] vers-border-solid vers-border-2 vers-border-purple-500'>
      <div className='vers-aspect-square vers-w-full'>
        <img className='vers-h-full vers-w-full vers-object-contain vers-bg-white vers-p-2' src={image} alt='' />
      </div>
      <div className='vers-px-4 vers-py-3 sm:vers-pt-4 sm:vers-pb-6 vers-flex vers-flex-col vers-gap-1 sm:vers-gap-2 vers-items-center'>
        <h2 className='vers-text-lg xsm:vers-text-xl vers-font-bold vers-text-white '>{title}</h2>
        <p className='xsm:vers-text-md vers-text-white'>{description }</p>
        <div className='vers-flex vers-justify-between vers-w-full vers-items-center'>
          <p className='vers-text-3xl vers-font-bold vers-text-white'>${price.toFixed(2)}</p>
          <FontAwesomeIcon icon={faArrowCircleRight} className='vers-text-5xl vers-text-white'/>
        </div>
      </div>
    </article>
  )
}

export default CardProduct