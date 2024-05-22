import { Meta, StoryObj } from '@storybook/react';
import { InputFieldCurrencyKUI } from '.';

const meta: Meta<typeof InputFieldCurrencyKUI> = {
  title: 'Form/InputFieldCurrency',
  component: InputFieldCurrencyKUI,
};

export default meta;

type Story = StoryObj<typeof InputFieldCurrencyKUI>;

export const Default: Story = {
  args: {
    label: 'Price',
  },
};
