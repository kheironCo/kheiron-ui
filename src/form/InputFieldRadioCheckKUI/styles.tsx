import { css } from '@emotion/react';

export const styles = css`
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
