import { InputFieldCurrencyKUI } from 'form';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputFieldCurrencyKUI> = {
  title: 'Form/InputFieldCurrency',
  component: InputFieldCurrencyKUI,
  argTypes: {
    label: {
      description: 'Define the text of the input',
    },

    getValue: {
      description: 'Function to get the value',
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputFieldCurrencyKUI>;

export const Default: Story = {
  args: {
    label: 'Price',
  },
};
