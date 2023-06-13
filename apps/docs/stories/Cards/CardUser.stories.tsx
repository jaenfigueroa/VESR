import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardUser from '../../../../packages/uiv2/src/components/Cards/CardUser';

const meta:Meta<typeof CardUser> = {
  title: 'components/Cards/CardUser',
  component: CardUser,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'Nombre del usuario',
      control: 'text',
    },
    age: {
      description: 'Edad del usuario',
      control: 'number'
    },
    degree: {
      description: 'Carrera universitaria o instituto',
      control: 'text'
    },
    position: {
      description: 'Cargo en la organizacion',
      control: 'text'
    },
    image: {
      description: 'Fotografia del usuario',
      control: 'text'
    }
  },
  decorators: [
    (Component) => (
      <div className='vers-w-[400px]'>
        <Component/>
      </div>
    )
  ]
}

type Story = StoryObj<typeof CardUser>

export const Example1:Story = {
  args: {
    name: 'Juan Ramirez',
    age: 23,
    degree: 'Ing. Industrial',
    position:'Genente general',
    image: 'https://images.pexels.com/photos/16241898/pexels-photo-16241898/free-photo-of-elefante-africano-del-arbusto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
}

export default meta
