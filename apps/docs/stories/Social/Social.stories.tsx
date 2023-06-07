import type { Meta } from '@storybook/react';
import { Social } from '../../../../packages/uiv2/src/components/Social/Social';

const meta:Meta<typeof Social> = {
  title: 'components/Social',
  component: Social,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['white', 'purple'],
    },
  },
  args: {
    variant: 'white',
  },
}

export const Primary = {
  args: {
    variant: 'white',
  },
}

export const Secondary = {
  args: {
    variant: 'purple',
  },
}

export default meta
