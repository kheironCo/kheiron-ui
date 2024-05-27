import { Meta, StoryObj } from '@storybook/react';
import { InputFieldTextKUI } from 'form';

const meta: Meta<typeof InputFieldTextKUI> = {
  title: 'Form/InputFieldKUI',
  component: InputFieldTextKUI,
};
export default meta;

type Story = StoryObj<typeof InputFieldTextKUI>;

export const Example: Story = {
  args: {
    label: 'Nombre',
  },
};
