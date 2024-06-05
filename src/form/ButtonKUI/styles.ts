import { ButtonListType } from './type';

export const GeneralButtonStyle = {
  padding: ' 0.25rem 0.75rem',
  minHeight: '24px',
  border: 'none',
  borderRadius: '0.375rem',
  cursor: 'pointer',
  fontWeight: 500,
};

export const ButtonList: ButtonListType = {
  primary: {
    filled: {
      backgroundColor: '#ff6347',
      color: 'white',
      borderRadius: '5px',
      padding: '10px 26px',
      border: 'none',
      fontWeight: '600',
      '&:hover': {
        backgroundColor: '#fc8c79',
      },
      '&:active': {
        color: 'white',
        backgroundColor: '#fc8c79',
      },
    },
    outlined: {
      color: '#ff6347',
      padding: '10px 26px',
      backgroundColor: 'transparent',
      border: `#ff6347 solid 1px`,
      fontWeight: '600',
      '&:hover': {
        backgroundColor: 'white',
      },
      '&:active': {
        backgroundColor: '#fc8c79',
        color: 'white',
      },
    },
  },
  secondary: {
    filled: {
      backgroundColor: '#ffc107',
      color: 'white',
      borderRadius: '5px',
      padding: '10px 26px',
      border: 'none',
      fontWeight: '600',
      '&:hover': {
        backgroundColor: '#ffd866',
      },
      '&:active': {
        backgroundColor: '#ffd866',
        color: 'white',
      },
    },
    outlined: {
      color: '#ffc107',
      backgroundColor: 'transparent',
      borderRadius: '5px',
      padding: '10px 26px',
      border: `#ffc107 solid 1px`,
      '&:hover': {
        color: '#fff',
        backgroundColor: '#ffd866',
      },
      '&:active': {
        color: '#fff',
        backgroundColor: '#ffd866',
      },
    },
  },
};
