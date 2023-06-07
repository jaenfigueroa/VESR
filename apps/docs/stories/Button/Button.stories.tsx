import type { Meta, StoryObj  } from '@storybook/react'
import { Button } from '../../../../packages/uiv2/src/components/Button/Button';

const meta:Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Texto o contenido del botón',
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
  args: {
    text: 'Mi Boton',
    variant: 'primary',
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary:Story  = {
  args: {
    text: 'Más información',
    variant: 'primary',
  },
}

export const Secondary:Story  = {
  args: {
    text: 'Más información',
    variant: 'secondary',
  },
}

export const Tertiary = {
  args: {
    text: 'Más información',
    variant: 'primary',
    icon: 'face',
  },
}

export const Quaternary = {
  args: {
    text: 'Más información',
    variant: 'secondary',
    icon: 'face',
  },
}

