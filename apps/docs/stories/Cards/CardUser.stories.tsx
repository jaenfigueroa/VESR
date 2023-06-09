import type { Meta, StoryObj } from '@storybook/react';
import CardUser from '../../../../packages/uiv2/src/components/Cards/CardUser';

const meta:Meta<typeof CardUser> = {
  title: 'components/Cards/CardUser',
  component: CardUser,
  tags: ['autodocs'],
  argTypes: {
    // title: {
    //   description: 'El titulo que se va a mostrar en la tarjeta',
    //   control: 'text',
    // },
    // text: {
    //   description: 'El texto que se va mostrar en la tarjeta',
    //   control: 'text',
    // },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
}

type Story = StoryObj<typeof CardUser>

export const Example1:Story = {
  args: {
    name: 'Juan',
    age: 23,
    degree: 'Ing. Industrial',
    position:'Genente general',
    image: 'https://images.pexels.com/photos/16241898/pexels-photo-16241898/free-photo-of-elefante-africano-del-arbusto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  },
}

export default meta
