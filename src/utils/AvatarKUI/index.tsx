// AvatarKUI.tsx
import { AvatarRoot, AvatarAlt, Avatar } from './styles';
import { AvatarKUIProps } from './types'; // Importa los tipos desde el archivo separado
import { useState, useEffect } from 'react';

export const AvatarKUI = ({ imgSrc, altText, borderRadius, altStyle, size }: AvatarKUIProps) => {
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
        <AvatarRoot size={size} borderRadius={borderRadius}>
          <Avatar src={imgSrc} alt={altText} />
        </AvatarRoot>
      ) : (
        <AvatarAlt altText={altText} altStyle={altStyle} size={size} borderRadius={borderRadius}>
          {altText.charAt(0).toUpperCase()}
        </AvatarAlt>
      )}
    </>
  );
};
