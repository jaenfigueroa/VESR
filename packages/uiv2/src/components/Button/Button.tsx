import { Icon, IconTypes } from '../Icon/Icon'

export interface Props {
  /**
  * ¿De qué tipo debe ser el botón?
  */
  variant?: 'primary' | 'secondary'
  // variant?: 'primary'
  /* *
  *Texto que mustra el boton
   */
  text: string,
  /* ** Tipo de icono que deb tener */
  icon?: IconTypes
  /* ** Accion a realizar al hacer click en el boton */
  action?: () => void
}

const defaultClasses = 'vers-px-3 vers-py-2 sm:vers-p-3 vers-text-md sm:vers-text-lg vers-text-white vers-font-bold vers-flex vers-gap-2 vers-duration-500'

const colorClassNames = {
  primary: 'vers-bg-primary hover:vers-bg-green',
  secondary: 'vers-bg-tertiary hover:vers-bg-green-dark',
}

/**
 * Componente principal de la interfaz de usuario
 */
export const Button = ({ variant = 'primary', text, icon, action }: Props) => {
  const buttonClasses = `${colorClassNames[variant]} ${defaultClasses}`

  return (
    <button className={buttonClasses} onClick={action} >
      {icon && <div className='vers-w-3'><Icon type={icon} /></div>}
      {text}
    </button>
  )
}
