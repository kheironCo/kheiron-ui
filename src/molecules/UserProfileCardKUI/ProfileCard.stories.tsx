import { UserProfileCardKUI, UserProfileCardKUIProps } from '.';

export default {
  title: 'Organism/UserProfileCard',
  component: UserProfileCardKUI,
};

type Arguments = { args: UserProfileCardKUIProps };

export const Default: Arguments = {
  args: {
    image:
      'https://media.licdn.com/dms/image/D4E03AQE1Bb9EzRFgOg/profile-displayphoto-shrink_200_200/0/1677449697782?e=1720051200&v=beta&t=dR7uel5RupI-26iPjo8TQ3o2_xoYu8v3TdhPQ1PeG3I',
    head: 'Lorem ipsum dolor sit amet.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna enim, viverra quis felis a, vulputate rhoncus nulla.',
  },
};
