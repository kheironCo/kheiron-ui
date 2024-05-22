import { ButtonKUI, ButtonKUIProps } from '.';

export default {
  title: 'Form/Button',
  component: ButtonKUI,
};

type Arguments = { args: ButtonKUIProps };

export const Default: Arguments = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Arguments = {
  args: {
    palette: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Arguments = {
  args: {
    palette: 'secondary',
    children: 'Secondary',
  },
};
