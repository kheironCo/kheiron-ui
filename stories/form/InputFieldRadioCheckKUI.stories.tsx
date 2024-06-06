import { IconRadioClose, IconRadioOpen } from 'icons';
import { InputFieldRadioCheckKUI } from 'form';
import { IconHeartFilled, IconHeartOutlined } from 'icons';
import { Meta } from '@storybook/react';

const meta: Meta<typeof InputFieldRadioCheckKUI> = {
  title: 'Form/InputFieldRadioCheckKUI',
  component: InputFieldRadioCheckKUI,
  argTypes: {
    position: {
      description: 'This parameter set the label position of the radio bind of the radio',
    },
  },
};
export default meta;

export const Example = {
  args: {
    items: [
      { label: 'Radio1', value: 'valor1' },
      { label: 'Radio2', value: 'valor2' },
      { label: 'Radio3', value: 'valor3' },
      { label: 'Radio4', value: 'valor4' },
    ],
  },
};
export const Example2 = {
  args: {
    icon: <IconRadioOpen />,
    iconChecked: <IconRadioClose />,
    items: [
      { label: 'Ejemplo1', value: 'valor1' },
      { label: 'Ejemplo2', value: 'valor2' },
      { label: 'Holas5', value: 'valor3' },
      { label: 'Ejemplo4', value: 'valor4' },
    ],
  },
};
export const Example3 = {
  args: {
    icon: <IconHeartFilled />,
    iconChecked: <IconHeartOutlined />,
    items: [
      { label: 'Ejemplo1', value: 'valor1' },
      { label: 'Ejemplo2', value: 'valor2' },
      { label: 'Ejemplo3', value: 'valor3' },
      { label: 'Ejemplo4', value: 'valor4' },
      { label: 'Ejemplo5', value: 'valor5' },
    ],
  },
};
