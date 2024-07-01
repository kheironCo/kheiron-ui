// @ts-check
import { Meta, StoryObj } from '@storybook/react';
import { TableKUI } from 'dashboard';
import { Paragraph } from 'element';
import { css } from '@emotion/react';
import { fakeData } from './mock';
import { UserProfileCardKUI } from 'utily';

const meta: Meta<typeof TableKUI> = {
  title: 'Dashboard/TableKUI',
  component: TableKUI,
  argTypes: {
    keys: {
      control: 'object',
      description: `This props recibe a string's array`,
    },
    head: {
      control: 'object',
      description: `Head is an Object. It's key is equal to the keys and this value is a string`,
    },
    body: {
      control: 'object',
      description: `Body is equal to the head prop. This is an array to object`,
    },
    renderHead: { type: 'function' },
    renderBody: { type: 'function' },
  },
};

export default meta;

type Story = StoryObj<typeof TableKUI>;

export const Default: Story = {
  args: {
    keys: ['id', 'user', 'age', 'city', 'phone'],
    head: {
      id: 'ID',
      user: 'User',
      age: 'Age',
      city: 'City',
      phone: 'Phone',
    },
    body: fakeData,
    onRow: (value) => ({
      css: css`
        cursor: pointer;
      `,
      onClick: () => alert(value?.id),
    }),
    renderBody: ({ value, key, valueRow }) => {
      if (['id', 'age', 'phone'].includes(key)) {
        return (
          <Paragraph
            css={css`
              font-family: monospace;
              font-size: 0.875rem;
              color: #777;
            `}
          >
            {value}
          </Paragraph>
        );
      }
      switch (key) {
        case 'user': {
          return (
            <UserProfileCardKUI
              css={css`
                cursor: pointer;
                & .KUI-user-profile-card-root:hover {
                  box-shadow: 0 0 0 0.25rem #7773;
                }
                & .KUI-user-profile-card-root {
                  width: 100%;
                  justify-content: left;
                  box-sizing: border-box;
                }
              `}
              image={valueRow?.user?.image || ''}
              head={valueRow?.user?.name || ''}
              body={valueRow?.user?.email || ''}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                alert(valueRow?.user?.name);
              }}
            />
          );
        }
        default: {
          return value;
        }
      }
    },
  },
};
