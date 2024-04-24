import React from 'react';

export type AtomDialogProps = React.DialogHTMLAttributes<HTMLDialogElement>;

export interface DialogJSXElement extends React.JSX.Element {}

export const AtomDialog = ({ children, className, ...rest }: AtomDialogProps) =>
  (
    <dialog className={`KUI-atom-element-dialog ${className || ''}`} {...rest}>
      {children}
    </dialog>
  ) as DialogJSXElement;
