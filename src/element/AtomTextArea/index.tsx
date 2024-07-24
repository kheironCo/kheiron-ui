import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Input = styled.textarea``;

export type AtomTextAreaProps = Parameters<typeof Input>[0];

export interface AtomTextAreaElement extends React.JSX.Element {}

export const AtomTextArea = forwardRef<HTMLTextAreaElement, AtomTextAreaProps>(
  ({ className, ...rest }, ref) => (
    <textarea className={`KUI-atom-element-textarea ${className || ''}`} {...rest} ref={ref} />
  ),
);

AtomTextArea.displayName = 'AtomTextArea';
