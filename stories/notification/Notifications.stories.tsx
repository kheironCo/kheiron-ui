import { Meta, StoryObj } from '@storybook/react';
import { NotificationKUI } from '../../src/NotificationKUI';

const meta: Meta<typeof NotificationKUI> = {
  title: 'Organism/Notification',
  component: NotificationKUI,
};

export default meta;

type Story = StoryObj<typeof NotificationKUI>;

export const WarnNotification: Story = {
  args: {
    type: 'warn',
    description: 'Warning Notification',
  },
};

export const SuccessNotification: Story = {
  args: {
    type: 'success',
    description: 'Success Notification',
  },
};

export const InfoNotification: Story = {
  args: {
    type: 'info',
    description: 'Info Notification',
  },
};

export const ErrorNotification: Story = {
  args: {
    type: 'error',
    description: 'Error Notification',
  },
};
