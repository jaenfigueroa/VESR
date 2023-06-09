import type { Meta, StoryObj } from '@storybook/react';
import { Social } from '../../../../packages/uiv2/src/components/Social/Social';

const meta:Meta<typeof Social> = {
  title: 'components/Social',
  component: Social,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['white', 'purple'],
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'purple', value: '#5f2475' },
        { name: 'white', value: '#fff' },
      ],
      default: 'purple'
    },
  }
}

type Story = StoryObj<typeof Social>



export const Example1:Story = {
  args: {
    color: 'purple',
    direction: 'row',
  },
  parameters: {
    backgrounds: {
      default: 'white'
    },
  }
}

export const Example2:Story = {
  args: {
    color: 'purple',
    direction: 'column',
  },
  parameters: {
    backgrounds: {
      default: 'white'
    },
  }
}

export const Example3:Story = {
  args: {
    color: 'white',
    direction: 'row',
  },
}

export const Example4:Story = {
  args: {
    color: 'white',
    direction: 'column',
  },
}

export default meta
