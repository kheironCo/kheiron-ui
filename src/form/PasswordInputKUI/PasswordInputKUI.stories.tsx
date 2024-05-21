import { Meta, StoryObj } from '@storybook/react';
import { PasswordInputKUI } from '.';

const meta: Meta<typeof PasswordInputKUI> = {
  title: 'Form/Password',
  component: PasswordInputKUI,
};

export default meta;

type Story = StoryObj<typeof PasswordInputKUI>;

export const Default: Story = {
  args: {},
};
