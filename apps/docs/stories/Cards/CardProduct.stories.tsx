import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardProduct from '../../../../packages/uiv2/src/components/Cards/CardProduct';

const meta:Meta<typeof CardProduct> = {
  title: 'components/Cards/CardProduct',
  component: CardProduct,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'El texto que se va mostrar en la tarjeta',
      control: 'text',
    },
    description: {
      description: 'El texto que se va mostrar en la tarjeta',
      control: 'text',
    },
    price: {
      description: 'El texto que se va mostrar en la tarjeta',
      control: 'text',
    },
    image: {
      description: '',
      control: 'select',
      options: [
        'https://res.cloudinary.com/djksz5k3c/image/upload/v1686180352/MI-NUBE/VESR/Frame_44_1_qzvnzi.png',
        'https://res.cloudinary.com/djksz5k3c/image/upload/v1686180352/MI-NUBE/VESR/Frame_44_4_a5dywb.png',
        'https://res.cloudinary.com/djksz5k3c/image/upload/v1686180352/MI-NUBE/VESR/Frame_44_3_b1wpew.png'
      ]
    }
  },
  decorators: [
    (Component) => (
      <div className='vers-w-[350px]'>
        <Component />
      </div>
    ),
  ],
}

type Story = StoryObj<typeof CardProduct>

export const Example1:Story = {
  args: {
    title: 'Titulo de prueba',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    price: 10,
    image: 'https://res.cloudinary.com/djksz5k3c/image/upload/v1686180352/MI-NUBE/VESR/Frame_44_1_qzvnzi.png'
  },
}

export default meta
