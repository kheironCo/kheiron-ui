import { CurrencyInputKUI } from '@KUI-form';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CurrencyInputKUI> = {
  title: 'Form/Bases/CurrencyInput',
  component: CurrencyInputKUI,
};

export default meta;

type Story = StoryObj<typeof CurrencyInputKUI>;
export const Default: Story = {
  args: {},
};
