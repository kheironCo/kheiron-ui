import { TagKUI } from 'utils';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagKUI> = {
  title: 'Utils/TagKUI',
  component: TagKUI,
};
export default meta;
type Story = StoryObj<typeof TagKUI>;

export const Example: Story = {
  args: {
    label: 'Ejemplo',
    borderStyle: 'dotted',

    bgcolor: '#476236',
    color: 'yellow',
  },
};
