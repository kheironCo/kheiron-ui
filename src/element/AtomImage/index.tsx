import React from 'react';

type AtomImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  alt?: string;
};

export interface AtomImageElement extends React.JSX.Element {}

export const AtomImage = ({ className, ...rest }: AtomImageProps) =>
  (<img className={`KUI-atom-element-image ${className || ''}`} {...rest} />) as AtomImageElement;
