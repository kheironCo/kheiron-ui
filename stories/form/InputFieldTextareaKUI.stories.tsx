import { Meta, StoryObj } from '@storybook/react';
import { InputFieldTextareaKUI } from '../../src/form/InputFieldTextareaKUI';

const meta: Meta<typeof InputFieldTextareaKUI> = {
  title: 'Form/InputFieldTextareaKUI',
  component: InputFieldTextareaKUI,
};

export default meta;

type Story = StoryObj<typeof InputFieldTextareaKUI>;

export const Default: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: 'Buenos días',
  },
};
