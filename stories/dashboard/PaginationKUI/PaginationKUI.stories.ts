import { Meta, StoryObj } from '@storybook/react';
import { PaginationKUI } from 'dashboard';

const meta: Meta<typeof PaginationKUI> = {
  title: 'dashboard/Pagination',
  component: PaginationKUI,
};
export default meta;

type Story = StoryObj<typeof PaginationKUI>;

export const Default: Story = {};
