import Icon, { IconTypes } from '../Icon/Icon'

export interface Props {
  text: string,
  color?: 'primary' | 'secondary'
  showIcon?: boolean
  iconType?: IconTypes
  onClick?: () => void
}

const defaultClasses = 'vers-px-3 vers-py-2 sm:vers-p-3 vers-text-md sm:vers-text-lg vers-text-white vers-font-bold vers-flex vers-gap-2 vers-duration-500'

export const colorClassNames = {
  primary: 'vers-bg-primary hover:vers-bg-green',
  secondary: 'vers-bg-tertiary hover:vers-bg-green-dark',
}

export const Icons = {
  face: <Icon type='face'/>
}

const ButtonPrimary = ({color= 'primary', text='Mi Boton', showIcon=false, iconType='face', onClick }: Props) => {
  const buttonClasses = `${colorClassNames[color]} ${defaultClasses}`

  return (
    <button className={buttonClasses} onClick={onClick} >
      {showIcon && <div className='vers-w-3'>{Icons[iconType]}</div>}
      {text}
    </button>
  )
}

export default ButtonPrimary
