export type AvatarProps = {
  alt: string;
  src: string;
};

export type AvatarRootProps = {
  altStyle?: {
    bgColor?: string;
    color?: string;
    border?: string;
  };
  size?:
    | {
        width: string;
        height: string;
      }
    | string;
  borderRadius?: string;
};

export type AvatarStyleProps = AvatarRootProps & {
  altText: string;
  borderRadius?: string;
};

export type AvatarKUIProps = AvatarStyleProps & {
  imgSrc: string;
};
