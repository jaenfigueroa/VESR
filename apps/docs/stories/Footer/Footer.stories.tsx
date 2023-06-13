import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../../../../packages/uiv2/src/components/Footer/Footer';

const meta:Meta<typeof Footer> = {
  title: 'components/Footer',
  component: Footer,
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

type Story = StoryObj<typeof Footer>

export const Example1:Story = {
  args: {
    variant: 'purple',
    width:'small'
  },
}

export default meta
