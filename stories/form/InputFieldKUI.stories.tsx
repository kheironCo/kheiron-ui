import { Meta, StoryObj } from '@storybook/react';
import { InputFieldTextKUI } from 'form';

const meta: Meta<typeof InputFieldTextKUI> = {
  title: 'Form/InputFieldTextKUI',
  component: InputFieldTextKUI,
  argTypes: {
    label: {
      description: 'Define the text of the input',
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputFieldTextKUI>;

export const Example: Story = {
  args: {
    label: 'Nombre: ',
    errorMessage: 'Este es un mensaje indicador de errores al validar el campo de texto',
    width: '',
  },
};
