import { Meta, StoryObj } from '@storybook/react';
import { InputFieldPasswordKUI } from 'form';

const meta: Meta<typeof InputFieldPasswordKUI> = {
  component: InputFieldPasswordKUI,
  title: 'Form/inputFieldPasswordKUI',
  argTypes: {
    label: {
      description: 'Define the text of the input',
    },

    position: {
      description: 'Define if the position',
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputFieldPasswordKUI>;
export const Example: Story = {
  args: {
    label: 'Contraseña: ',
  },
};
