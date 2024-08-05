import React from 'react';
import { DropdownStyled, DropdownSummaryStyled, DropdownSummaryIconStyled, DropdownContentStyled } from './styles';

export type DropDownKUIProps = {
  icon?: React.JSX.Element;
  summary: React.JSX.Element;
  children: React.ReactNode;
};

export const DropDownKUI = ({ icon, summary, children }: DropDownKUIProps) => (
  <DropdownStyled  className="KUI-dropdown">
    <DropdownSummaryStyled  className="KUI-dropdown-summary">
      <DropdownSummaryIconStyled  className="KUI-dropdown-summary-icon">
        {icon || '▼'}
      </DropdownSummaryIconStyled>
      {summary}
    </DropdownSummaryStyled>
    <DropdownContentStyled  className="KUI-dropdown-content">
      {children}
    </DropdownContentStyled>
  </DropdownStyled>
);
