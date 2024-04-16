import React from 'react';

type AtomTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface AtomTextAreaElement extends React.JSX.Element {}

export const AtomTextArea = ({ className, ...rest }: AtomTextAreaProps) =>
  (
    <textarea
      className={`KUI-atom-element-textarea ${className || ''}`}
      {...rest}
    />
  ) as AtomTextAreaElement;
