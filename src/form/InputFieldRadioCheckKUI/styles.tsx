import styled from 'styled-components';
import { AtomDiv } from '../../element';

export const AtomDivComponentStyled = styled(AtomDiv)`
  .KUI-input-field-radio-check-root {
    display: flex;
    align-items: center;
  }
  .KUI-input-field-radio-check-input[type='radio'] {
    display: none;
  }
  .radio-label {
    display: flex;
    cursor: pointer;
  }
  .abierto {
    display: none;
  }
  .cerrado {
    display: flex;
  }

  .KUI-input-field-radio-check-input[type='radio']:checked + .abierto {
    display: flex;
  }
  .KUI-input-field-radio-check-input[type='radio']:checked + .cerrado {
    display: none;
  }
`;
