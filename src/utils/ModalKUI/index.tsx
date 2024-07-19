import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AtomDivComponentStyled, AtomDialogComponentStyled, CloseButton } from './styles';

export type ModalKUIProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export const ModalKUI = ({ children, open, onClose }: ModalKUIProps) => {
  return (
    <AtomDialogComponentStyled open={open}>
      <AtomDivComponentStyled className="KUI-modal-content">
        <CloseButton onClick={onClose}>
          <RxCross2 />
        </CloseButton>
        {children}
      </AtomDivComponentStyled>
    </AtomDialogComponentStyled>
  );
};
