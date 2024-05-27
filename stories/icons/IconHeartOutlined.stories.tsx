import { Meta, StoryObj } from '@storybook/react';
import { IconHeartOutlined } from 'icons';

const meta: Meta<typeof IconHeartOutlined> = {
  title: 'Icon/HeartOutlined',
  component: IconHeartOutlined,
};

export default meta;

type Story = StoryObj<typeof IconHeartOutlined>;

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
