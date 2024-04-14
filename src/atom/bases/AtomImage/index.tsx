import React from 'react';

type AtomImageProps = React.HTMLAttributes<HTMLImageElement> & {
  alt?: string;
};

const AtomImage = ({ className, alt = '', ...rest }: AtomImageProps) => {
  return (
    <img
      className={`KUI-atom-element-image ${className}`}
      alt={alt}
      {...rest}
    />
  );
};

export default AtomImage;
