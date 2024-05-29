import { Meta, StoryObj } from '@storybook/react';
import { IconHeartFilled } from 'icons';

const meta: Meta<typeof IconHeartFilled> = {
  title: 'Icon/HeartFilled',
  component: IconHeartFilled,
};

export default meta;

type Story = StoryObj<typeof IconHeartFilled>;

export const Default: Story = {
  args: {},
};

export const Color: Story = {
  args: {
    color: '#d22',
  },
};

export const Size: Story = {
  args: {
    size: '4rem',
  },
};
