import type { Meta, StoryObj } from '@storybook/react';
import CardService from '../../../../packages/uiv2/src/components/Cards/CardService';

const meta:Meta<typeof CardService> = {
  title: 'components/Cards/CardService',
  component: CardService,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'El titulo que se va a mostrar en la tarjeta',
      control: 'text',
    },
    text: {
      description: 'El texto que se va mostrar en la tarjeta',
      control: 'text',
    },
  },
}

type Story = StoryObj<typeof CardService>

export const Example1:Story = {
  args: {
    title: 'Titulo de prueba',
    text: 'Descripcion de prueba',
    image: 'https://images.pexels.com/photos/16241898/pexels-photo-16241898/free-photo-of-elefante-africano-del-arbusto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
}

export default meta
