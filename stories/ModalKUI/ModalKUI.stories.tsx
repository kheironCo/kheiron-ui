import { Meta, StoryObj } from '@storybook/react';
import { ModalKUI } from '../../src/ModalKUI';
import { FaPen } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const meta: Meta<typeof ModalKUI> = {
  title: 'OptionModal',
  component: ModalKUI,
  argTypes: {
  },
};
export default meta;

type Story = StoryObj<typeof ModalKUI>;

export const Default: Story = {
  args: {
    marginLeft: "300px",
    items: [{ id: 1, icon: <FaPen />, text: "Texto 1"}, { id: 2, icon: <IoMdSettings/ >, text: "Texto 2"}, { id: 3, icon: <IoMdSettings/ >, text: "Texto 3"}]
  },
};
