import { Meta, StoryObj } from '@storybook/react';
import { IconEyeClosed } from '.';

const meta: Meta<typeof IconEyeClosed> = {
  title: 'Icon/IconEyeClosed',
  component: IconEyeClosed,
};

export default meta;
type Story = StoryObj<typeof IconEyeClosed>;

export const Default: Story = {
  args: {},
};
