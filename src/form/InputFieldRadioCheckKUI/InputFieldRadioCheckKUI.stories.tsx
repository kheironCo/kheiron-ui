import { IconRadioClose, IconRadioOpen } from '@KUI-icons';
import { InputFieldRadioCheckKUI } from '.';
import { IconHeartFilled, IconHeartOutlined } from '@KUI-icons';

export default {
  title: 'Form/InputFieldRadioCheckKUI',
  component: InputFieldRadioCheckKUI,
};

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
