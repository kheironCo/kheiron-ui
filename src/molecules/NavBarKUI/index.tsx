import React from 'react';

import { AtomDiv, AtomNav } from '../../element';

import { ItemType } from './type';
import { AtomDivStyle, AtomListStyle } from './styles';
import AtomListComponent from './AtomListComponent';

export type NavBarProps = {
  leftElement?: React.JSX.Element;
  listItem: ItemType[] | ItemType;
  rightElement?: React.JSX.Element;
};

export const NavBarKUI = ({ leftElement, listItem, rightElement }: NavBarProps) => {
  return (
    <AtomNav className="KUI-navbar-root">
      <AtomDivStyle className="KUI-navbar-container">
        <AtomDiv className="KUI-navbar-content-left">{leftElement}</AtomDiv>
        <AtomListStyle className="KUI-navbar-ul" >
          {Array.isArray(listItem) ? (
            listItem.map((elemento: ItemType, i: number) => (
              <AtomListComponent key={`KUI-navbar-item-${i}`} {...elemento} />
            ))
          ) : (
            <AtomListComponent {...listItem} />
          )}
        </AtomListStyle>
        <AtomDiv className="KUI-navbar-content-right">{rightElement}</AtomDiv>
      </AtomDivStyle>
    </AtomNav>
  );
};
