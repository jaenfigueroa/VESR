import ButtonSecondary from '../Buttons/ButtonSecondary'

const DIRECTIONS = {
  normal: 'sm:vers-flex-row',
  reverse: 'sm:vers-flex-row-reverse',
}

type Colors =  'blue' |'purple'

const TEXT_COLORS: Record<Colors,string> = {
  blue: 'vers-text-blue',
  purple: 'vers-text-pink-800',
}

type Props = {
  direction: 'normal' | 'reverse',
  color: Colors
  title: string
  text: string
  images: string[]
  onClick?: () => void
}

const CardProject = ({direction = 'normal', color='blue',title='Titulo', text='texto de prueba para el contenido', images, onClick}:Props) => {
  return (
    <article className={`vers-flex vers-flex-col ${DIRECTIONS[direction]} vers-gap-2 sm:vers-gap-4 md:vers-gap-6`}>
      <div>
        <div className='vers-grid vers-grid-cols-2 vers-grid-rows-2 vers-gap-1'>
          <img className='vers-rounded-xl vers-aspect-square vers-object-cover' src={images[0]} alt='' />
          <img className='vers-rounded-xl vers-aspect-square vers-object-cover' src={images[1]} alt='' />
          <img className='vers-rounded-xl vers-aspect-[2/1] vers-object-cover vers-col-span-2' src={images[2]} alt='' />
        </div>
      </div>

      <div className='vers-bg-bxxxlue vers-flex vers-flex-col vers-gap-2 sm:vers-gap-4 md:vers-gap-6 vers-justify-center'>
        <div className=' vers-flex vers-flex-col vers-px-2 vers-py-1 sm:vers-p-[0] vers-gap-2 sm:vers-gap-4 md:vers-gap-6'>
          <h2 className={`${TEXT_COLORS[color]} vers-font-bold vers-text-xl sm:vers-text-3xl md:vers-text-5xl`}>{title}</h2>
          <p className='vers-text-pinkxxxx-800 vers-text-md sm:vers-text-lg md:vers-text-xl vers-text-justify'>{text}</p>
        </div>
        <div>
          <ButtonSecondary text='visitar' color={color} onClick={onClick}/>
        </div>
      </div>
    </article>
  )
}

export default CardProject