import { Meta, StoryObj } from '@storybook/react';
import { AvatarKUI } from 'atom';

const meta: Meta<typeof AvatarKUI> = {
  title: 'Atom/Avatar',
  component: AvatarKUI,
};
export default meta;

type Story = StoryObj<typeof AvatarKUI>;

export const Default: Story = {
  args: {
    imgSrc: 'Default Image',
    altText: 'Default Alt Text',
  },
};
