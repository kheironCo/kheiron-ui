import { css } from '@emotion/react';

export const styles = css`
  .div {
    display: flex;
    align-items: center;
  }
  input[type='radio'] {
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
  .flexing {
    display: flex;
    flex-direction: row;
  }

  input[type='radio']:checked + .abierto {
    display: flex;
  }
  input[type='radio']:checked + .cerrado {
    display: none;
  }
`;
