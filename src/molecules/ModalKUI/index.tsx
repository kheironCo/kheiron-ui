import React from 'react';
import { AtomDialog, AtomDiv } from '../../atom';
import { css } from '@emotion/react';
import ROOT from '../../common/root';

export type ModalKUIProps = {
  children: React.ReactNode;
  open: boolean;
};

const ModalKUI = ({ children, open }: ModalKUIProps) => {
  return (
    <AtomDialog
      css={css({
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        border: 'none',
        display: 'none',
        '& > .KUI-modal-content': {
          display: 'none',
        },
        '&[open]': {
          backgroundColor: '#0000004d',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          '& > .KUI-modal-content': {
            display: 'block',
          },
        },
      })}
      open={open}
    >
      <AtomDiv
        css={css({
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: ROOT.color.gray[200],
        })}
        className="KUI-modal-content"
      >
        {children}
      </AtomDiv>
    </AtomDialog>
  );
};

export default ModalKUI;
