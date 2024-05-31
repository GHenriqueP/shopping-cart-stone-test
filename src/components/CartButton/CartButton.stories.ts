import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CartButton from './index';

const meta = {
  title: 'components/CartButton',
  component: CartButton,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'stone' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CartButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
