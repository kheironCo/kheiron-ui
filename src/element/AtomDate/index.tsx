import { forwardRef } from 'react';
import styled from 'styled-components';

const Input = styled.input``;

export type AtomDateProps = Parameters<typeof Input>[0];

export interface AtomDateElement extends JSX.Element {}

export const AtomDate = forwardRef<HTMLInputElement, AtomDateProps>(
  ({ className, ...rest }, ref) => (
    <Input
      type="date"
      className={`KUI-atom-element-input ${className || ''}`}
      ref={ref}
      {...rest}
    />
  ),
);

AtomDate.displayName = 'AtomDate';
