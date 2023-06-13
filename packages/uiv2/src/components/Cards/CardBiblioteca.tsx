export type VariantColor = 'red' | 'blue' | 'purple'

export const COLORS:Record<VariantColor,string> = {
  red: 'vers-bg-red',
  blue: 'vers-bg-blue',
  purple: 'vers-bg-purple-300',
}

export interface ItemBiblioteca {
  title: string
  description: string
  image: string
}

interface Props extends ItemBiblioteca {
  color: VariantColor
}

const CardBiblioteca = ({  title='Titulo', description='descripcion', image='', color='red' }: Props) => {
  return (
    <article className={`${COLORS[color]} md:vers-grid md:vers-grid-cols-[350px,2fr] md:vers-h-[550px] vers-overflow-hidden`}>
      <div className='vers-p-3 sm:vers-p-2 md:vers-flex vers-flex-col vers-flex vers-gap-1 md:vers-flex-row'>

        {/* bloque 1 */}
        <div className='md:vers-w-[50px] vers-flex md:vers-justify-center md:vers-items-center '>
          <div className='md:vers-flex md:vers-gap-4 md:vers-rotate-[-90deg] md:vers-translate-y-7 md:vers-translate-x-[-.2rem]'>
            <div className='vers-hidden md:vers-flex vers-flex-row vers-justify-center vers-items-center vers-gap-[.6rem]'>
              <div className='vers-w-[100px] vers-h-[2px] vers-bg-white'></div>
              <div className='vers-w-[12px] vers-h-[12px] vers-rounded-full vers-bg-white'></div>
            </div>
            <h2 className='vers-inline-block vers-text-white vers-text-2xl md:vers-text-3xl vers-uppercase vers-font-bold'>{title}</h2>
          </div>
        </div>
        {/* descripcion */}
        <div className='sm:vers-flex sm:vers-items-end md:vers-pb-6 vers-relative md:vers-w-[255px]'>
          <p className='vers-text-white vers-leading-[20px] sm:vers-leading-[30px] md:vers-leading-[35px] md:vers-w-full vers-break-words'>{description}</p>
        </div>

      </div>

      {/* imagen */}
      <div className='vers-h-auto vers-overflow-hidden md:h-full vers-w-full'>
        <img className='vers-aspect-[2/1] md:vers-w-full md:vers-h-full md:vers-object-cover vers-bg-gray' src={image} alt='' />
      </div>
    </article>
  )
}

export default CardBiblioteca