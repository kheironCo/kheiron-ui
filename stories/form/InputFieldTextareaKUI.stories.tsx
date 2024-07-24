import { Meta, StoryObj } from '@storybook/react';
import { InputFieldTextAreaKUI } from 'form';

const meta: Meta<typeof InputFieldTextAreaKUI> = {
  title: 'Form/InputFieldTextAreaKUI',
  component: InputFieldTextAreaKUI,
};

export default meta;

type Story = StoryObj<typeof InputFieldTextAreaKUI>;

export const Default: Story = {
  args: {
    label: 'Hola',
    position: 'top',
    width: '100px',
    errorMessage: 'Texto de error',
  },
};
