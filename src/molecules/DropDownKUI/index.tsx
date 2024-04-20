import React from 'react';
import { AtomDetails, AtomDiv, AtomSummary } from '../../atom';
import './styles.css';

export type DropDownKUIProps = {
  icon?: React.JSX.Element;
  summary: React.JSX.Element;
  children: React.ReactNode;
};

export const DropDownKUI = ({ icon, summary, children }: DropDownKUIProps) => (
  <AtomDetails className="KUI-dropdown">
    <AtomSummary className="KUI-dropdown-summary">
      <AtomDiv className="KUI-dropdown-summary-icon">{icon || '▼'}</AtomDiv>
      {summary}
    </AtomSummary>
    <AtomDiv className="KUI-dropdown-content">{children}</AtomDiv>
  </AtomDetails>
);
