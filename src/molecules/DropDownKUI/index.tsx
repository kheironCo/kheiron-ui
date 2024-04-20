import React, { useState } from 'react';
import { AtomDetails, AtomDiv, AtomSummary } from '../../atom';

export type DropDownKUIProps = {
  icon: React.JSX.Element;
  summary: React.JSX.Element;
  children: React.ReactNode;
};

export const DropDownKUI = ({ icon, summary, children }: DropDownKUIProps) => (
  <AtomDetails id="details-id">
    <AtomSummary>
      <AtomDiv className="KUI-summary-icon-root">{icon}</AtomDiv>
      {summary}
    </AtomSummary>
    {children}
  </AtomDetails>
);
