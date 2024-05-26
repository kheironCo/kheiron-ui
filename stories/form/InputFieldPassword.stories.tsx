import { Meta, StoryObj } from '@storybook/react';
import { InputFieldPasswordKUI } from '@KUI-form';

const meta: Meta<typeof InputFieldPasswordKUI> = {
  component: InputFieldPasswordKUI,
  title: 'Form/inputFieldPasswordKUI',
};
export default meta;

type Story = StoryObj<typeof InputFieldPasswordKUI>;
export const Example = {
  args: {
    label: 'Contraseña: ',
  },
};
