import { InputFieldCheckboxKUI } from 'form';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputFieldCheckboxKUI> = {
  title: 'Form/InputFieldCheckboxKUI',
  component: InputFieldCheckboxKUI,
  argTypes: {
    label: {
      description: 'Define the text of the input',
    },
    checked: {
      description: 'Define if the check is checked',
    },
    getValue: {
      description: 'Function to get the value',
    },
    icon: {
      description: 'Define the icon',
    },
    iconChecked: {
      description: 'Define if the icon is checked',
    },
    position: {
      description: 'Define if the position',
    },
    align: {
      description: 'Define where the text is align',
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
