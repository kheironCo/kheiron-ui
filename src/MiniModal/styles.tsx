import styled from 'styled-components';
import { AtomButton, AtomList, AtomListItem } from '../element';

export const ButtonStyled = styled(AtomButton)`
border: none; 
background-color: #f3edf7;
cursor: pointer;
`;
export const ButtonIconStyled = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
  background-color: #E6E0E9;
`;


export const UlStyled = styled(AtomList)`
background-color: #f3edf7;
list-style-type: none;
padding: 0;
margin-top: 31px;
margin-right: 0px; 
border: 1px solid #ccc; 
border-radius:2px;  
position: absolute;
`;
export const LiStyled = styled(AtomListItem)`
padding: 8px 0px;
cursor: pointer;
margin: 0 10px 0 10px;
`;