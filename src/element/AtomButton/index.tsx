import styled from 'styled-components';

const Button = styled.button``;

export type AtomButtonProps = Parameters<typeof Button>[0];

export interface AtomButtonJSXElement extends React.JSX.Element {}

export const AtomButton = ({ className, children, ...rest }: AtomButtonProps) =>
  (
    <Button className={`KUI-element-button ${className || ''}`} {...rest}>
      {children}
    </Button>
  ) as AtomButtonJSXElement;
