import Icon, { IconTypes } from '../Icon/Icon'

export interface Props {
  text: string,
  color?: 'primary' | 'secondary'
  showIcon?: boolean
  iconType?: IconTypes
  action?: () => void
}

const defaultClasses = 'vers-px-3 vers-py-2 sm:vers-p-3 vers-text-md sm:vers-text-lg vers-text-white vers-font-bold vers-flex vers-gap-2 vers-duration-500'

const colorClassNames = {
  primary: 'vers-bg-primary hover:vers-bg-green',
  secondary: 'vers-bg-tertiary hover:vers-bg-green-dark',
}

const ButtonPrimary = ({color= 'primary', text='Mi Boton', showIcon=false, iconType='face', action }: Props) => {
  const buttonClasses = `${colorClassNames[color]} ${defaultClasses}`

  return (
    <button className={buttonClasses} onClick={action} >
      {showIcon && <div className='vers-w-3'><Icon type={iconType} /></div>}
      {text}
    </button>
  )
}

export default ButtonPrimary
