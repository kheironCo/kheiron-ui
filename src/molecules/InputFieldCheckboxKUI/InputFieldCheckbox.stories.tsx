import { Meta, StoryObj } from '@storybook/react';
import { InputFieldCheckboxKUI } from './';

const meta: Meta<typeof InputFieldCheckboxKUI> = {
  title: 'Organism/InputFieldCheckboxKUI',
  component: InputFieldCheckboxKUI,
};

export default meta;

type Story = StoryObj<typeof InputFieldCheckboxKUI>;

export const Default :Story = {
  args: {
    label: 'Esto es un Label',
    checked: true,
  
  },
};

export const Prueba :Story = {
  args: {
    label: 'Prueba',
    checked: true,
  
  },
};
