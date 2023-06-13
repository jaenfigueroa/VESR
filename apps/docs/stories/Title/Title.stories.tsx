import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Title from '../../../../packages/uiv2/src/components/Title/Title';

const meta:Meta<typeof Title> = {
  title: 'components/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Titulo de la seccion',
      control: 'text',
    },
    children: {
      description: 'Contenido de la seccion',
      control: 'text',
    }
  },
}

type Story = StoryObj<typeof Title>

export const Example1:Story = {
  args: {
    text: 'objetivos',
    children: <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
  },
}

export default meta
