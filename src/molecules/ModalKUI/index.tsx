import React from 'react';
import { AtomDialog, AtomDiv } from '../../atom';

export type ModalKUIProps = {
  children: React.ReactNode;
  open: boolean;
};

export const ModalKUI = ({ children, open }: ModalKUIProps) => {
  return (
    <AtomDialog open={open}>
      <AtomDiv>{children}</AtomDiv>
    </AtomDialog>
  );
};

export default ModalKUI;
