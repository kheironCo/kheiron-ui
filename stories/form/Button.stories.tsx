import { Meta, StoryObj } from '@storybook/react';
import { ButtonKUI } from 'form';

const meta: Meta<typeof ButtonKUI> = {
  title: 'Form/Button',
  component: ButtonKUI,
};
export default meta;

type Story = StoryObj<typeof ButtonKUI>;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    palette: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    palette: 'secondary',
    children: 'Secondary',
  },
};
