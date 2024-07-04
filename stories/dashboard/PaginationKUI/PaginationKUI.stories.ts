import { Meta, StoryObj } from '@storybook/react';
import { PaginationKUI } from 'dashboard';

const meta: Meta<typeof PaginationKUI> = {
  title: 'dashboard/Pagination',
  component: PaginationKUI,
  argTypes: {
    neighbors: {
      description: 'This param receive the number of adjacent pages',
      type: 'number',
      control: 'number',
    },
    totalPages: {
      control: 'number',
      type: 'number',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PaginationKUI>;

export const Default: Story = {};
