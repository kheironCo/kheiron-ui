import React, { useState } from 'react';
import { AtomDetails, AtomSummary } from '../Element';

export type AtomDropDownProps = {
  summary: React.JSX.Element;
  children: React.ReactNode;
};

export const AtomDropDown = ({ summary, children }: AtomDropDownProps) => {
  const [toggleDetails, setToggleDetails] = useState(false);
  return (
    <AtomDetails open={toggleDetails}>
      <AtomSummary onClick={() => setToggleDetails((old) => !old)}>
        {summary}
      </AtomSummary>
      {children}
    </AtomDetails>
  );
};
