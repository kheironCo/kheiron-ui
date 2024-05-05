import { css } from '@emotion/react';
import { AtomAnchor, AtomListItem } from '../../element';
import { ItemType } from './type';
import { AtomListItemStyle } from './styles';

const AtomListComponent = ({ value, href, target }: ItemType) => {
  return (
    <AtomListItem className="KUI-navbar-list" css={css(AtomListItemStyle)}>
      <AtomAnchor target={target ? '_blank' : ''} href={href}>
        {value}
      </AtomAnchor>
    </AtomListItem>
  );
};

export default AtomListComponent;
