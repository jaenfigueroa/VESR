import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

type Color = 'blue' | 'purple'

export const ButtonColors: Record<Color, string> = {
  blue: 'vers-bg-blue',
  purple: 'vers-bg-pink-800',
}

type Props = {
  text: string
  color?: Color,
  onClick?: () => void
}

const ButtonSecondary = ({text='Mi Boton', color='blue', onClick}: Props) => {
  return (
    <button className={ `${ButtonColors[color]} vers-text-white vers-py-[.45rem] vers-px-[.5rem] vers-rounded-full  vers-flex vers-justify-center sm:vers-justify-between vers-items-center vers-gap-4 hover:vers-scale-110 vers-transition-transform`} onClick={onClick}>
      <p className='vers-font-bold vers-uppercase sm:vers-text-xl vers-pl-[3rem]'>{text }</p>
      <FontAwesomeIcon icon={faArrowCircleRight} className='vers-text-4xl'/>
    </button>
  )
}

export default ButtonSecondary