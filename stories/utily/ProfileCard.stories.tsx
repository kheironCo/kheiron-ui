import { Meta, StoryObj } from '@storybook/react';
import { UserProfileCardKUI } from 'utils';

const meta: Meta<typeof UserProfileCardKUI> = {
  title: 'Utils/UserProfileCard',
  component: UserProfileCardKUI,
};
export default meta;

type Story = StoryObj<typeof UserProfileCardKUI>;

export const Default: Story = {
  args: {
    image: 'Default Image',
    head: 'Default Heading',
    body: 'Default Body',
  },
};
