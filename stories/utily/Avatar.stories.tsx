import { Meta, StoryObj } from '@storybook/react';
import { AvatarKUI } from 'utils';

const componentDescription = `
The AvatarKUI component is used to display avatars with advanced customization options for styling.

Properties:

- **imgSrc** (string): URL of the avatar image to display.
- **altText** (string): Alternative text of the image used to generate the background color and its complementary colors for the text and border of the avatar.
- **altStyle** (optional):
  - **bgColor** (string): Background color of the avatar.
  - **color** (string): Text and border color of the avatar.
  - **border** (string): Border style of the avatar.
- **size** (optional):
  - (string | object): Value or object defining the dimensions of the avatar.
  - **width** (string): Width of the avatar.
  - **height** (string): Height of the avatar.
- **borderRadius** (string): Border radius of the avatar to customize the roundness of the corners. If not specified, the avatar defaults to a circular shape.

Behavior:
- If imgSrc is not available or fails to load, the background color of the avatar is generated using altText.
- If altStyle is provided, these specific styles override any default styles derived from altText.
- The size of the avatar is defined using size. It can be an object with width and height properties, or a single string value that applies to both width and height of the avatar.
`;

const meta: Meta<typeof AvatarKUI> = {
  title: 'Utils/Avatar',
  component: AvatarKUI,
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof AvatarKUI>;

export const Default: Story = {
  args: {
    imgSrc: 'https://avatars.githubusercontent.com/u/158779561?s=200&v=4',
    altText: 'Kheiron image',
    altStyle: {
      bgColor: '#8b1887',
      color: '#ffabfc',
      border: '.3rem solid #ffabfc',
    },
  },
};
export const withImage: Story = {
  args: {
    imgSrc: 'https://avatars.githubusercontent.com/u/158779561?s=200&v=4',
    altText: 'Kheiron image',
  },
};
export const withoutImage: Story = {
  args: {
    imgSrc: 'If the image is not loaded, colors are created with the alternative text',
    altText: 'Kheiron',
  },
};
export const alternativeStyles: Story = {
  args: {
    altStyle: {
      bgColor: '#8b1887',
      color: '#ffabfc',
      border: '.3rem solid #ffabfc',
    },
    imgSrc: '',
    altText: 'kheiron',
    borderRadius: '25%',
    size: '15rem',
  },
};
