
import React from 'react';

import {AtomAnchor, AtomDiv, AtomList, AtomListItem, AtomNav } from '../../element';
import { css } from '@emotion/react';

export type NabvarProps = {
    leftElement?: React.JSX.Element;
    listItem?: {value: string, href: string, target: boolean}[];
    rightElement?: React.JSX.Element;
  };

 
export const NavBarKUI = ({leftElement, listItem, rightElement}: NabvarProps) => {


  return (
    
    <AtomNav
    css={css({

    })}>
        <AtomDiv css={css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      height: "60px",
      borderBottom: "1px solid black"
    })}>
          <AtomDiv>{leftElement}</AtomDiv>
        <AtomList css={css({
          display: "flex",
          
        })}>
            {
              listItem?.map((elemento)=>(
                <AtomListItem 
                
                 css={css({
                  display: "flex",
                  textDecoration: "none",
                  padding: "0 10px 0 10px",
                  textAlign: "center"
                })} 
                
                >
                  <AtomAnchor target={elemento.target ? "_blank" : ""}  href={elemento.href}>{elemento.value}</AtomAnchor>
                  
                  </AtomListItem>
              ))
            }
        </AtomList>
        <AtomDiv>{rightElement}</AtomDiv>
        </AtomDiv>
    </AtomNav>
    
  )
}
