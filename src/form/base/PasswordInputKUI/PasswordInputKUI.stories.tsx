import { Meta, StoryObj } from '@storybook/react';
import { PasswordInputKUI } from '.';

const meta: Meta<typeof PasswordInputKUI> = {
  title: 'Form/Bases/Password',
  component: PasswordInputKUI,
};

export default meta;

type Story = StoryObj<typeof PasswordInputKUI>;

export const Default: Story = {
  args: {},
};