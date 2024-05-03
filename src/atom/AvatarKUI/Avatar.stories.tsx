import { AvatarKUI, AvatarKUIProps } from '.';

export default {
  title: 'Atom/Avatar',
  component: AvatarKUI,
};

type Arguments = {
  args: AvatarKUIProps;
};

export const Default: Arguments = {
  args: {
    imgSrc: 'Default Image',
    altText: 'Default Alt Text',
  },
};
