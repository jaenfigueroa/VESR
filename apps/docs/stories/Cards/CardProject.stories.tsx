import type { Meta, StoryObj } from '@storybook/react';
import CardProject from '../../../../packages/uiv2/src/components/Cards/CardProject';

const meta:Meta<typeof CardProject> = {
  title: 'components/Cards/CardProject',
  component: CardProject,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'El texto que se va mostrar en la tarjeta',
      control: 'text',
    },
    direction: {
      description: 'La direccion de la tarjeta',
      control: 'select',
      options: ['normal', 'reverse']
    },
  },
}

type Story = StoryObj<typeof CardProject>

export const Example1:Story = {
  args: {
    title: 'Titulo de prueba',
    text: 'Descripcion de prueba',
    images: [
      'https://images.pexels.com/photos/17066825/pexels-photo-17066825/free-photo-of-carretera-paisaje-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/16983935/pexels-photo-16983935/free-photo-of-mujer-nubes-en-pie-cerca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/16241898/pexels-photo-16241898/free-photo-of-elefante-africano-del-arbusto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ]
  },
}

export default meta
