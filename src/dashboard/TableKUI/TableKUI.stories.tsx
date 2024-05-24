// @ts-check
import { Meta, StoryObj } from '@storybook/react';
import { TableKUI } from '.';
import { AtomParagraph } from '@KUI-element';
import { css } from '@emotion/react';
import { fakeData } from './mock';
import { UserProfileCardKUI } from 'molecules';

const meta: Meta<typeof TableKUI> = {
  title: 'Dashboard/TableKUI',
  component: TableKUI,
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
    renderBody: ({ value, key, valueRow }) => {
      if (['id', 'age', 'phone'].includes(key)) {
        return (
          <AtomParagraph
            css={css`
              font-family: monospace;
              font-size: 0.875rem;
              color: #777;
            `}
          >
            {value}
          </AtomParagraph>
        );
      }
      switch (key) {
        case 'user': {
          return (
            <UserProfileCardKUI
              css={css`
                & .KUI-user-profile-card-root {
                  justify-content: left;
                  width: 100% !important;
                }
              `}
              image={valueRow?.user?.image || ''}
              head={valueRow?.user?.name || ''}
              body={valueRow?.user?.email || ''}
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
