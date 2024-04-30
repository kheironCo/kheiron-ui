import React from 'react';

import {
  AtomAnchor,
  AtomDiv,
  AtomList,
  AtomListItem,
  AtomNav,
} from '../../element';

import { css } from '@emotion/react';
import { ItemType } from './type';
import { AtomDivStyle, AtomListItemStyle, AtomListStyle } from './styles';

export type NabvarProps = {
  leftElement?: React.JSX.Element;
  listItem?: ItemType[] | ItemType;
  rightElement?: React.JSX.Element;
};

export const NavBarKUI = ({
  leftElement,
  listItem,
  rightElement,
}: NabvarProps) => {
  return (
    <AtomNav className='KUI-navbar-root'>
      <AtomDiv css={AtomDivStyle} className='KUI-navbar-container'>
        <AtomDiv className='KUI-navbar-content-left'>{leftElement}</AtomDiv>
        <AtomList className='KUI-navbar-ul' css={AtomListStyle}>
          {
          Array.isArray(listItem) ? (
            listItem?.map((elemento) => (
              <AtomListItem className='KUI-navbar-list' css={AtomListItemStyle}>
                <AtomAnchor
                  target={elemento.target ? '_blank' : ''}
                  href={elemento.href}
                >
                  {elemento.value}
                </AtomAnchor>
              </AtomListItem>
            ))
          ) : (
            <AtomListItem className='KUI-navbar-list' css={AtomListItemStyle}>
              <AtomAnchor
                target={listItem?.target ? '_blank' : ''}
                href={listItem?.href}
              >
                {listItem?.value}
              </AtomAnchor>
            </AtomListItem>
          )
          }
        </AtomList>
        <AtomDiv className='KUI-navbar-content-right'>{rightElement}</AtomDiv>
      </AtomDiv>
    </AtomNav>
  );
};
