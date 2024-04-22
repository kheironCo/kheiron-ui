import React from 'react';
import {
  Dropdown,
  DropdownSummary,
  DropdownSummaryIcon,
  DropdownContent,
} from './styles';
import { AtomDetails, AtomDiv, AtomSummary } from '../../atom';

export type DropDownKUIProps = {
  icon?: React.JSX.Element;
  summary: React.JSX.Element;
  children: React.ReactNode;
};

export const DropDownKUI = ({ icon, summary, children }: DropDownKUIProps) => (
  <AtomDetails css={Dropdown} className="KUI-dropdown">
    <AtomSummary css={DropdownSummary} className="KUI-dropdown-summary">
      <AtomDiv css={DropdownSummaryIcon} className="KUI-dropdown-summary-icon">
        {icon || '▼'}
      </AtomDiv>
      {summary}
    </AtomSummary>
    <AtomDiv css={DropdownContent} className="KUI-dropdown-content">
      {children}
    </AtomDiv>
  </AtomDetails>
);
