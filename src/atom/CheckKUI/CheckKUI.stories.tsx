import { Meta, StoryObj } from '@storybook/react';
import { CheckKUI } from '.';
import { IconHeartFilled, IconHeartOutlined } from '../../icons';

const meta: Meta<typeof CheckKUI> = {
  title: 'Atom/Check',
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