// @ts-check
import { Meta, StoryObj } from '@storybook/react';
import { TableKUI } from '.';
import { AtomDiv } from '@KUI-element';
import { css } from '@emotion/react';

const meta: Meta<typeof TableKUI> = {
  title: 'Dashboard/TableKUI',
  component: TableKUI,
};

export default meta;

type Story = StoryObj<typeof TableKUI>;

export const Default: Story = {
  args: {
    keys: ['id', 'name', 'age'],
    head: {
      id: 'ID',
      name: 'Name',
      age: 'Age',
    },
    body: [
      { id: 1, name: 'John Doe', age: 28 },
      { id: 2, name: 'Jane Smith', age: 34 },
      { id: 3, name: 'Emily Johnson', age: 22 },
    ],
    renderBody: ({ value, key }) => {
      switch (key) {
        case 'adios': {
          return (
            <AtomDiv
              css={css`
                background-color: blueviolet;
              `}
            >
              {value}
            </AtomDiv>
          );
        }
        default: {
          return value;
        }
      }
    },
  },
};
