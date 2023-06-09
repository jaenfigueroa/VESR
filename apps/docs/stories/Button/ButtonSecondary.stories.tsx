import type { Meta, StoryObj  } from '@storybook/react'
import ButtonSecondary, { ButtonColors } from '../../../../packages/uiv2/src/components/Buttons/ButtonSecondary';

const meta:Meta<typeof ButtonSecondary> = {
  title: 'components/Buttons/ButtonSecondary',
  component: ButtonSecondary,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Texto o contenido del botón',
      control: 'text',
    },
    color: {
      description: 'Color de fondo del botón',
      control: 'select',
      options: Object.keys(ButtonColors),
    },
    onClick: {
      description: 'Función que se ejecuta al hacer click en el botón',
    }
  },
  args: {
    onClick: () => {
      console.log('se hizo click')
    },
  }
}

export default meta

type Story = StoryObj<typeof ButtonSecondary>

export const Example1:Story  = {
  args: {
    color: 'blue',
  },
}

export const Example2:Story  = {
  args: {
    color: 'purple',
  },
}
