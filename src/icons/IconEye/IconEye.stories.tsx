import { Meta, StoryObj } from '@storybook/react';
import { IconEye } from '.';

const meta: Meta<typeof IconEye> = {
  title: 'Icon/IconEye',
  component: IconEye,
};

export default meta;
type Story = StoryObj<typeof IconEye>;

export const Default: Story = {
  args: {},
};
