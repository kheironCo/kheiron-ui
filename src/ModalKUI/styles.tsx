import styled from 'styled-components';
import { AtomButton, AtomDiv, AtomList, AtomListItem } from '../element';

export const ButtonStyled = styled(AtomButton)`
border: none; 
background-color: #f3edf7;
cursor: pointer;
`;

interface DivStyledProps {
  marginLeft: string; 
}
export const DivStyled = styled(AtomDiv)<DivStyledProps>`
margin-left:${({marginLeft}) => marginLeft};
` 
  
  
  export const ButtonIconStyled = styled(AtomButton)`
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: #E6E0E9;
  }
`;

interface UlStyledProps {
  top: number;
  right: number;
  width: string; 
}

export const UlStyled = styled(AtomList)<UlStyledProps>`
top:${({top}) => top + "px"};
right: ${({right}) => right + "px"};
width:${({width}) => width};
background-color: #f3edf7;
list-style-type: none;
padding: 0;
margin-top: 31px;
margin-right: 0px; 
border: 1px solid #ccc; 
border-radius:2px;  
position: absolute;

`;

interface LiStyledProps {
  index: number;
  items: any[]; 
}

export const LiStyled = styled(AtomListItem)<LiStyledProps>`
padding: 8px 0px;
cursor: pointer;
margin: 0 10px 0 10px;
border-bottom: ${({items, index}:any) => ( index != items.length - 1 ? '1px solid #ccc' : 'none' )};
`;