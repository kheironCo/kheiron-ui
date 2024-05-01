import { AtomDiv, AtomImage } from '../../element';
import { AvatarRoot } from './styles';

export type AvatarKUIProps = {
  imgSrc?: string;
  altText: string;
};

export const AvatarKUI = ({ imgSrc, altText }: AvatarKUIProps) => {
  <AtomDiv>
    <AtomImage
      css={AvatarRoot}
      className="KUI-avatar-root"
      src={imgSrc}
      alt={altText}
    />
  </AtomDiv>;
};
