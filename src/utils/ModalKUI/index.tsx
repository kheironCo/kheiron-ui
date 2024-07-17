import React from 'react';

import { AtomDivComponentStyled, AtomDialogComponentStyled } from './styles';

export type ModalKUIProps = {
  children: React.ReactNode;
  open: boolean;
};

export const ModalKUI = ({ children, open }: ModalKUIProps) => {
  return (
    <AtomDialogComponentStyled open={open}>
      <AtomDivComponentStyled className="KUI-modal-content">{children}</AtomDivComponentStyled>
    </AtomDialogComponentStyled>
  );
};
