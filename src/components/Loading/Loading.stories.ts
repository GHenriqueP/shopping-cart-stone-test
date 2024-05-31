import type { Meta, StoryObj } from '@storybook/react';
import Loading from './index';

const meta = {
  title: 'components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
