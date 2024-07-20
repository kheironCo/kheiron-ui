import { Meta, StoryObj } from '@storybook/react';
import { ModalKUI } from 'utils';
import { ButtonKUI } from 'form';

const meta: Meta<typeof ModalKUI> = {
  title: 'Utils/Modal',
  component: ModalKUI,
};
export default meta;

type Story = StoryObj<typeof ModalKUI>;

export const Default: Story = {
  args: {
    open: true,
    children: <ButtonKUI>Close</ButtonKUI>,
  },
};
