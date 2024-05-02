import { AtomDiv, AtomImage } from '../../element';
import { AvatarRoot, AvatarAlt } from './styles';

export type AvatarKUIProps = {
  imgSrc?: string;
  altText: string;
};

export const AvatarKUI = ({ imgSrc, altText }: AvatarKUIProps) => {
  const userChar = altText.charAt(0);

  const renderContent = () => {
    if (imgSrc) {
      return <AtomImage css={AvatarRoot} className="KUI-avatar-root" src={imgSrc} alt={altText} />;
    } else {
      return (
        <AtomDiv css={AvatarAlt} className="KUI-avatar-alt">
          {userChar}
        </AtomDiv>
      );
    }
  };

  return <AtomDiv>{renderContent()}</AtomDiv>;
};
