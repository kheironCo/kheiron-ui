import { Meta, StoryObj } from '@storybook/react';
import { InputFieldTextAreaKUI } from '../../src/form/InputFieldTextAreaKUI';

const meta: Meta<typeof InputFieldTextAreaKUI> = {
  title: 'Form/InputFieldTextAreaKUI',
  component: InputFieldTextAreaKUI,
};

export default meta;

type Story = StoryObj<typeof InputFieldTextAreaKUI>;

export const Default: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: 'Buenos días',
  },
};
