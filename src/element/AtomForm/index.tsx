import React from 'react';

type AtomFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export interface AtomFormElement extends React.JSX.Element {}

export const AtomForm: React.FC<AtomFormProps & { handleSearch?: () => void }> = ({ className, handleSearch, ...rest }) =>
  (
    <form className={`KUI-atom-element-form ${className || ''}`} {...rest} onSubmit={handleSearch}/>
  ) as AtomFormElement;

