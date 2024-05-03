import { UserProfileCardKUI, UserProfileCardKUIProps } from '.';

export default {
  title: 'Organism/UserProfileCard',
  component: UserProfileCardKUI,
};

type Arguments = { args: UserProfileCardKUIProps };

export const Default: Arguments = {
  args: {
    image: 'Default Image',
    head: 'Default Heading',
    body: 'Default Body',
  },
};
