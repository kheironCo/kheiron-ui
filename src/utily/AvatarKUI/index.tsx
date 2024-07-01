import { AtomDiv, AtomImage } from '../../element';
import { AvatarRoot, AvatarAlt } from './styles';
import { useState, useEffect } from 'react';

export type AvatarKUIProps = {
  imgSrc: string;
  altText: string;
};

export const AvatarKUI = ({ imgSrc = '', altText = '' }: AvatarKUIProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, [imgSrc]);

  return (
    <>
      {imageLoaded ? (
        <AtomImage css={AvatarRoot} className="KUI-avatar-root" src={imgSrc} alt={altText} />
      ) : (
        <AtomDiv css={AvatarAlt} className="KUI-avatar-alt">
          {altText.charAt(0)}
        </AtomDiv>
      )}
    </>
  );
};
