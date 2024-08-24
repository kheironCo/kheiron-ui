import styled from 'styled-components';

type UlStyledProps = {
    top: number;
    right: number;
    width: string;
};

export const UlStyled = styled.ul<UlStyledProps>`
    top: ${({ top }) => `${top - 5}px`};
    right: ${({ right }) => `${right -5}px`};
    width: ${({ width }) => width};
    background-color: #f3edf7;
    list-style-type: none;
    padding: 0;
    border: 1px solid #ccc;
    border-radius: 2px;
    position: absolute;
    margin: 5px;
`;

export const ButtonIconStyled = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    &:hover{
      background-color: #f3edf7;
    }
`;

export const LiStyled = styled.li<{ divider: boolean }>`
    padding: 10px;
    border-bottom: ${({ divider }) => (divider ? '1px solid #ccc' : 'none')};
    cursor: pointer;
`;

export const DivStyled = styled.div<{ marginLeft: string }>`
    margin-left: ${({ marginLeft }) => marginLeft};

`;