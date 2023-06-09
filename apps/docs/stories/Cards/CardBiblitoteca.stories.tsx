import type { Meta, StoryObj } from '@storybook/react';
import CardBiblioteca, { COLORS} from '../../../../packages/uiv2/src/components/Cards/CardBiblioteca';

const meta:Meta<typeof CardBiblioteca> = {
  title: 'components/Cards/CardBiblioteca',
  component: CardBiblioteca,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'El color de la tarjeta',
      control: 'select',
      options: Object.keys(COLORS),
    },
    title: {
      description: 'El titulo de la tarjeta',
      control: 'text',
    },
    description: {
      description:'Descripcion de prueba',
      control: 'text',
    },
    image: {
      description: 'Imagen que acompaña',
      control: 'select',
      options: [
        'https://images.pexels.com/photos/14880025/pexels-photo-14880025.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        'https://images.pexels.com/photos/16978823/pexels-photo-16978823/free-photo-of-mar-ciudad-puesta-de-sol-agua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
  },
}

type Story = StoryObj<typeof CardBiblioteca>

export const Example1:Story = {
  args: {
    color: 'purple',
    title: 'Titulo',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
    image: 'https://images.pexels.com/photos/16978823/pexels-photo-16978823/free-photo-of-mar-ciudad-puesta-de-sol-agua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
}

export default meta
