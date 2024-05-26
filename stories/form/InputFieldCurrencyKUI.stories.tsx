import { InputFieldCurrencyKUI } from '@KUI-form';
import { Meta, StoryObj } from '@storybook/react';

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
