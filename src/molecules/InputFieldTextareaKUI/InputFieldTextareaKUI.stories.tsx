import { Meta, StoryObj } from "@storybook/react/*";
import { InputFieldTextareaKUI } from ".";

const meta: Meta<typeof InputFieldTextareaKUI> = {
    title: 'Molecules/InputFieldTextareaKUI',
    component: InputFieldTextareaKUI,
};

export default meta;

type Story = StoryObj<typeof InputFieldTextareaKUI>;

export const Default: Story = {
    args: {},
};

export const Label: Story = {
    args: {
        label: 'Buenos días'
    },
};