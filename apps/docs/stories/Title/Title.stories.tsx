import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Title from '../../../../packages/uiv2/src/components/Title/Title';

const meta:Meta<typeof Title> = {
  title: 'components/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
    children: {
      control: 'text',
    }
  },
}

type Story = StoryObj<typeof Title>

export const Example1:Story = {
  args: {
    text: 'objetivos',
    children: <h1 className='vers-p-2 vers-border-dashed vers-border-[1px] vers-color-light-gray'>Aqui va el contenido</h1>
  },
}

export default meta
