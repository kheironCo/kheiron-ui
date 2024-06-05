import { InputFieldCheckboxKUI } from 'form';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputFieldCheckboxKUI> = {
  title: 'Form/InputFieldCheckboxKUI',
  component: InputFieldCheckboxKUI,
  argTypes: {
    datatype: {
      description: 'A button component',
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputFieldCheckboxKUI>;

export const Default: Story = {
  args: {
    label: 'Esto es un Label',
    checked: true,
  },
};

export const Prueba: Story = {
  args: {
    label: 'Prueba',
    checked: true,
  },
};
