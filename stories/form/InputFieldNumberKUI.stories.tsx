import { Meta, StoryObj } from '@storybook/react';
import { InputFieldNumberKUI } from 'form';

const meta: Meta<typeof InputFieldNumberKUI> = {
  title: 'Form/InputFieldNumberKUI',
  component: InputFieldNumberKUI,
  argTypes: {
    label: {
      description: 'Define the Number of the input',
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputFieldNumberKUI>;

export const Example: Story = {
  args: {
    label: 'Stock: ',
    errorMessage: 'Este es un mensaje indicador de errores al validar el campo de Numero',
    width: '',
  },
};
