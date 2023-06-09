import type { Meta, StoryObj } from '@storybook/react';
import CardCheckbox from '../../../../packages/uiv2/src/components/Cards/CardCheckbox';

const meta:Meta<typeof CardCheckbox> = {
  title: 'components/Cards/CardCheckbox',
  component: CardCheckbox,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'El texto que se va mostrar en la tarjeta',
      control: 'text',
    },
  },
}

type Story = StoryObj<typeof CardCheckbox>

export const Example1:Story = {
  args: {
    text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,'
  },
}

export default meta
