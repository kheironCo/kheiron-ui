import { PasswordInputKUI } from 'form';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PasswordInputKUI> = {
  title: 'Form/Bases/Password',
  component: PasswordInputKUI,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PasswordInputKUI>;

export const Default: Story = {
  args: {},
};
