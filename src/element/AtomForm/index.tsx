import React from 'react';

type AtomFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export interface AtomFormElement extends React.JSX.Element {}

export const AtomForm = ({ className, ...rest }: AtomFormProps) =>
<<<<<<< HEAD
  (
    <form className={`KUI-atom-element-form ${className || ''}`} {...rest} />
  ) as AtomFormElement;

=======
  (<form className={`KUI-atom-element-form ${className || ''}`} {...rest} />) as AtomFormElement;
>>>>>>> dev
