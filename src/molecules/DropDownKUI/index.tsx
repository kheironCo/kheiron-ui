import React, { useState } from 'react';
import { AtomDetails, AtomSummary } from '../../atom';

export type DropDownKUIProps = {
  summary: React.JSX.Element;
  children: React.ReactNode;
};

export const DropDownKUI = ({ summary, children }: DropDownKUIProps) => {
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
