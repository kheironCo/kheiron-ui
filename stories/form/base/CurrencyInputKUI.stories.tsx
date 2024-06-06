import { CurrencyInputKUI } from 'form';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CurrencyInputKUI> = {
  title: 'Form/Bases/CurrencyInput',
  component: CurrencyInputKUI,
  argTypes: {
    value: {
      description: 'Define the value',
    },
    getValue: {
      description: 'Function to get the value',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CurrencyInputKUI>;
export const Default: Story = {
  args: {},
};
