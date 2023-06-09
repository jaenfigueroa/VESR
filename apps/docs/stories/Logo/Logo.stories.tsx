import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../../../../packages/uiv2/src/components/Logo/Logo';

const meta:Meta<typeof Logo> = {
  title: 'components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'La variante de color del logo',
      control: 'select',
      options: ['white', 'purple'],
    },
    width: {
      description: 'El tamaño del logo',
      control: 'select',
      options: ['small', 'medium'],
    }
  },
}

type Story = StoryObj<typeof Logo>

export const Example1:Story = {
  args: {
    variant: 'purple',
    width:'small'
  },
}

export const Example2:Story = {
  args: {
    variant: 'purple',
    width:'medium'
  },
}

export const Example3:Story = {
  args: {
    variant: 'white',
    width:'medium'
  },
}

export const Example4:Story = {
  args: {
    variant: 'white',
    width:'medium'
  },
}

export default meta
