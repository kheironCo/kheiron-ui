import { PasswordInputKUI } from 'form';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PasswordInputKUI> = {
  title: 'Form/Bases/Password',
  component: PasswordInputKUI,
  argTypes: {
    getValue: {
      description: 'Function to get the value',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInputKUI>;

export const Default: Story = {
  args: {},
};
