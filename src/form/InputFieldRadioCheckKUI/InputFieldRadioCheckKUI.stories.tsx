import { IconRadioClose2, IconRadioClose3, IconRadioOpen2 } from '@KUI-icons';
import { InputFieldRadioCheckKUI } from '.';
import { IconRadioOpen3 } from 'icons';

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
      
    ],
  },
};
export const Example2 = {
  args: {
    icon: <IconRadioOpen2  className="abierto"/> ,
    iconChecked: <IconRadioClose2  className="cerrado"/>,
        items: [
      { label: 'Ejemplo1', value: 'valor1' },
      { label: 'Ejemplo2', value: 'valor2' },
      { label: 'Ejemplo3', value: 'valor3' },
      { label: 'Ejemplo4', value: 'valor4' },
      
    ],
  },
};
export const Example3 = {
  args: {
    icon: <IconRadioOpen3  className="abierto"/> ,
    iconChecked: <IconRadioClose3  className="cerrado"/>,
        items: [
      { label: 'Ejemplo1', value: 'valor1' },
      { label: 'Ejemplo2', value: 'valor2' },
      { label: 'Ejemplo3', value: 'valor3' },
      { label: 'Ejemplo4', value: 'valor4' },
      { label: 'Ejemplo5', value: 'valor5' },
      
    ],
  },
};
