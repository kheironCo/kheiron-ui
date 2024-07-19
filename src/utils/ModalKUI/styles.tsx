import styled from 'styled-components';
import { AtomButton, AtomDialog, AtomDiv } from '../../element';
import ROOT from '../../common/root';

export const AtomDialogComponentStyled = styled(AtomDialog)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  display: none;

  & > .KUI-modal-content {
    display: none;
  }

  &[open] {
    background-color: #0000004d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;

    & > .KUI-modal-content {
      display: block;
    }
  }
`;

export const AtomDivComponentStyled = styled(AtomDiv)`
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 1.5rem;
  border-radius: 0.5rem;

  background-color: ${ROOT.color.gray[200]};
  display: flex;
  justify-content: start;
  flex-direction: column;

  position: absolute;
`;

export const CloseButton = styled(AtomButton)`
  padding: 0.125rem;
  border: none;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0.25rem;
  right: 0.25rem;

  background: none;
  transition: all 250ms ease;

  & path {
    transition: all 250ms ease;
  }

  &:hover {
    cursor: pointer;
    background-color: #735b84;

    & path {
      fill: #fff;
    }
  }
`;
