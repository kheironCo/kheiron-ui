import { AvatarRoot, AvatarAlt, Avatar } from './styles';
import { useState, useEffect } from 'react';

export type AvatarKUIProps = {
  imgSrc: string;
  altText: string;
  size?: {
    width: string;
    height: string;
  };
  altStyle?: {
    bgColor?: string;
    color?: string;
    border?: string;
  };
};

export const AvatarKUI = ({
  imgSrc = '',
  altText = '',
  altStyle = {},
  size = {
    width: '',
    height: '',
  },
}: AvatarKUIProps) => {
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
        <AvatarRoot size={size}>
          <Avatar src={imgSrc} alt={altText} />
        </AvatarRoot>
      ) : (
        <AvatarAlt altText={altText} altStyle={altStyle} size={size}>
          {altText.charAt(0).toUpperCase()}
        </AvatarAlt>
      )}
    </>
  );
};
