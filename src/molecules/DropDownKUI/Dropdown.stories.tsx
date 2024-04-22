import { DropDownKUI } from './';

export default {
  component: DropDownKUI,
  title: 'Organism/Dropdown',
};

export const Default = {
  args: {
    summary: 'Cabecera',
    children: 'Descripción del dropdown',
  },
};

export const Primary = {
  args: {
    ...Default.args,
    children: 'Primary descripción un poco mas extendida del dropdown',
  },
};
