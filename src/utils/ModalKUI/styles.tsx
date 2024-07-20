import styled from 'styled-components';
import { AtomDialog, AtomDiv } from '../../element';
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
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${ROOT.color.gray[200]};
`;
