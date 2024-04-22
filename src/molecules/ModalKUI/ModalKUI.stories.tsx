import React from 'react';
import ModalKUI, { ModalKUIProps } from '.';
import { ButtonKUI } from '../../';

export default {
  title: 'Organism/Modal',
  component: ModalKUI,
};

export const Default: { args: ModalKUIProps } = {
  args: {
    open: true,
    children: <ButtonKUI>Close</ButtonKUI>,
  },
};
