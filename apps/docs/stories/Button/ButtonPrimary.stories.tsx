import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import ButtonPrimary, { Icons, colorClassNames } from '../../../../packages/uiv2/src/components/Buttons/ButtonPrimary';

const meta:Meta<typeof ButtonPrimary> = {
  title: 'components/Buttons/ButtonPrimary',
  component: ButtonPrimary,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Texto o contenido del botón',
      control: 'text',
    },
    color: {
      description: 'Color de fondo del botón',
      control: 'select',
      options: Object.keys(colorClassNames),
    },
    showIcon: {
      description: 'Indica si se muestra el icono o no',
      control: 'boolean',
    },
    iconType: {
      description: 'Tipo de icono a mostrar',
      control: 'select',
      options: Object.keys(Icons)
    },
    onClick: {
      description: 'Accion a ejecutar al hacer click',
      action: 'clicked',
      play: () => {
        console.log('hola mundo')
      }
    }
  },
}

export default meta

type Story = StoryObj<typeof ButtonPrimary>

export const Example1:Story  = {
  args: {
    color: 'primary',
  },
}

export const Example2:Story  = {
  args: {
    color: 'secondary',
  },
}

export const Example3:Story = {
  args: {
    color: 'primary',
    showIcon: true,
    iconType: 'face',
  },
}

export const Example4:Story = {
  args: {
    color: 'secondary',
    showIcon: true,
    iconType: 'face',
  },
}

