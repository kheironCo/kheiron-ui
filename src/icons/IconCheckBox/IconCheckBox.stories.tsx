import { Meta, StoryObj } from '@storybook/react';
import { IconCheckBox } from '.';

const meta: Meta<typeof IconCheckBox> = {
  title: 'Icon/CheckBox',
  component: IconCheckBox,
};

export default meta;
type Story = StoryObj<typeof IconCheckBox>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
