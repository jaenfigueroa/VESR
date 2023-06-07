import type { Meta } from '@storybook/react';
import { Button } from './Button';

const meta:Meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Texto o contenido del botón',
      control: 'text',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
  args: {
    text: 'Mi Boton',
    variant: 'primary'
  }
}

export default meta;

/* BOTON PRIMARIO */
export const Primary = {
  args: {
    text: 'Mas informacion',
  }
}

/* BOTON SECUNDARIO */
export const Secondary = {
  args: {
    children: 'Mas informacion',
    variant: 'secondary',
  }
}

