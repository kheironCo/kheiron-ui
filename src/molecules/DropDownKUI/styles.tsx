import { css, keyframes } from '@emotion/react';

const SPINING = keyframes`
  from{
      max-height: 1px;
      opacity: 0;
  }
  to{
      max-height: 100vh;
      opacity: 1;
  }
`;

export const Dropdown = css`
  width: auto;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &[open] {
    background-color: #f7f7f7;
  }
  &summary::marker {
    content: '';
  }

  &summary::marker {
    content: '';
  }
  &[open] {
    > .KUI-dropdown-content {
      display: block;
      animation: ${SPINING} 2s ease;
    }
    > .KUI-dropdown-summary {
      .KUI-dropdown-summary-icon {
        transform: rotate(0deg);
      }
    }
  }
`;

export const DropdownSummary = css`
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

export const DropdownSummaryIcon = css`
  min-width: 1rem;
  min-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  transition: all 0.2s ease-out;
`;

export const DropdownContent = css`
  max-height: 100vh;
  padding: 0.5rem 1rem;
  display: none;
  overflow: hidden;
  background-color: blanchedalmond;
`;
