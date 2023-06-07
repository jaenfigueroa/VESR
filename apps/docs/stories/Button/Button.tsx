import React from 'react'

export interface Props {
  /**
  * ¿De qué tipo debe ser el botón?
  */
  variant?: 'primary' | 'secondary'
  /* *
  *Texto que mustra el boton
   */
  text: string,
  /* ** Tipo de icono que deb tener */
}

const defaultClasses = 'vers-p-2 vers-text-md vers-text-white vers-font-bold vers-flex vers-flex-row';

const colorClassNames = {
  primary: 'vers-bg-primary',
  secondary: 'vers-bg-green'
}

/**
 * Componente principal de la interfaz de usuario
 */
export const Button = ({ variant = 'primary', text}: Props) => {
  const buttonClasses = `${colorClassNames[variant]} ${defaultClasses}`;

  return (
    <button className={buttonClasses}>
      {text}
    </button>
  )
}
