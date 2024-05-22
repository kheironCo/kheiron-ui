import ROOT from '../../common/root';
import { ButtonListType } from './type';

export const GeneralButtonStyle = {
  padding: ' 0.25rem 0.75rem',
  minHeight: '24px',
  border: 'none',
  borderRadius: '0.375rem',
  cursor: 'pointer',
  fontWidht: 500,
};

export const ButtonList: ButtonListType = {
  primary: {
    filled: {
      color: '#fff',
      backgroundColor: ROOT.color.aiax.secondary,
      '&:hover': {
        backgroundColor: ROOT.color.aiax.primary,
      },
      '&:active': {
        backgroundColor: ROOT.color.aiax.tertiary,
      },
    },
    outlined: {
      color: ROOT.color.aiax.primary,
      backgroundColor: 'transparent',
      border: `${ROOT.color.aiax.secondary} solid 1px`,
      '&:hover': {
        color: '#fff',
        backgroundColor: ROOT.color.aiax.primary,
      },
      '&:active': {
        backgroundColor: ROOT.color.aiax.tertiary,
      },
    },
  },
  secondary: {
    filled: {
      color: '#fff',
      backgroundColor: ROOT.color.aiax.primary,
      '&:hover': {
        backgroundColor: ROOT.color.aiax.secondary,
      },
      '&:active': {
        backgroundColor: ROOT.color.aiax.tertiary,
      },
    },
    outlined: {
      color: ROOT.color.aiax.primary,
      backgroundColor: 'transparent',
      border: `${ROOT.color.aiax.primary} solid 1px`,
      '&:hover': {
        color: '#fff',
        backgroundColor: ROOT.color.aiax.secondary,
      },
      '&:active': {
        color: '#fff',
        backgroundColor: ROOT.color.aiax.tertiary,
      },
    },
  },
};
