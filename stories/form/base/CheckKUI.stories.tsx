import { Meta, StoryObj } from '@storybook/react';
import { IconHeartFilled, IconHeartOutlined } from 'icons';
import { CheckKUI } from 'form';

const meta: Meta<typeof CheckKUI> = {
  title: 'Form/Bases/CheckKUI',
  component: CheckKUI,
};

export default meta;

type Story = StoryObj<typeof CheckKUI>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <IconHeartOutlined />,
    iconChecked: <IconHeartFilled />,
  },
};

export const CustomIconChecked: Story = {
  args: {
    checked: true,
    icon: <IconHeartOutlined />,
    iconChecked: <IconHeartFilled />,
  },
};
