import { forwardRef } from 'react';
import styled from 'styled-components';

const Input = styled.input``;

export type AtomInputProps = Parameters<typeof Input>[0];

export interface AtomInputElement extends JSX.Element {}

export const AtomInput = forwardRef<HTMLInputElement, AtomInputProps>(
  ({ className, ...rest }, ref) => (
    <Input className={`KUI-atom-element-input ${className || ''}`} ref={ref} {...rest} />
  ),
);

AtomInput.displayName = 'AtomInput';
