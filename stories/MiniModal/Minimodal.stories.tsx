import { Meta, StoryObj } from '@storybook/react';
import { MiniModal } from '../../src/MiniModal';
import { FaPen } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const meta: Meta<typeof MiniModal> = {
  title: 'OptionModal',
  component: MiniModal,
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<typeof MiniModal>;

export const Default: Story = {
  args: {
    marginLeft: "300px",
    items: [{ icon: <FaPen />, text: "Texto 1"}, { icon: <IoMdSettings/ >, text: "Texto 2"}, { icon: <IoMdSettings/ >, text: "Texto 3"}]
  },
};
