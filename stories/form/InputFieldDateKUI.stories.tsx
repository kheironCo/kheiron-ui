import { Meta, StoryObj } from '@storybook/react';
import { InputFieldDateKUI } from 'form';

const meta: Meta<typeof InputFieldDateKUI> = {
  title: 'Form/InputFieldDateKUI',
  component: InputFieldDateKUI,
  argTypes: {
    label: {
      description: 'Define the text of the input',
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputFieldDateKUI>;

export const Example: Story = {
  args: {
    label: 'Fecha: ',
    errorMessage: 'Este es un mensaje indicador de errores al validar el campo de texto',
    width: '',
  },
};
