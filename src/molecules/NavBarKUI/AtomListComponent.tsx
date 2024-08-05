
import { AtomAnchor } from '../../element';
import { ItemType } from './type';
import { AtomListItemStyle } from './styles';

const AtomListComponent = ({ value, href, target }: ItemType) => {
  return (
    <AtomListItemStyle className="KUI-navbar-list" >
      <AtomAnchor target={target ? '_blank' : ''} href={href}>
        {value}
      </AtomAnchor>
    </AtomListItemStyle>
  );
};

export default AtomListComponent;
