import { Meta, StoryObj } from '@storybook/react';
import { MenuKUI } from '../../src/MenuKUI';
import { FaPen } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const meta: Meta<typeof MenuKUI> = {
  title: 'OptionModal/MenuKUI',  
  component: MenuKUI,
};
export default meta;

type Story = StoryObj<typeof MenuKUI>;

export const MenuKUIStory: Story = {  
  args: {
    marginLeft: "300px",
    items: [
      { icon: <FaPen />, text: "Texto 1" }, 
      { icon: <IoMdSettings />, text: "Texto 2" }, 
      { icon: <IoMdSettings />, text: "Texto 3" }
    ],
  },
};