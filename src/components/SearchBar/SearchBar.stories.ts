import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './index';
import { fn } from '@storybook/test';

const meta = {
  title: 'components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'stone' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
