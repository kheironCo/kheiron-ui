import { Meta, StoryObj } from '@storybook/react';
import { NotificationKUI } from '../../src/molecules/NotificationKUI';

const meta: Meta<typeof NotificationKUI> = {
  title: 'Organism/Notification',
  component: NotificationKUI,
};

export default meta;

type Story = StoryObj<typeof NotificationKUI>;

export const Default: Story = {
  args: {
    type: 'info',
    description: 'Default description',
  },
};
