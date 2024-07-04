import { ButtonListType } from './type';
import ROOT from '../../common/root';

export const GeneralButtonStyle = {
  width: 'min-content',
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
      backgroundColor: ROOT.color.aiax.primary,
      color: 'white',
      borderRadius: '5px',
      padding: '10px 26px',
      border: 'none',
      fontWeight: '600',
      '&:hover': {
        backgroundColor: ROOT.color.aiax.secondary,
      },
      '&:active': {
        color: 'white',
        backgroundColor: ROOT.color.aiax.secondary,
      },
    },
    outlined: {
      color: ROOT.color.aiax.primary,
      padding: '10px 26px',
      backgroundColor: 'transparent',
      border: `${ROOT.color.aiax.primary} solid 1px`,
      fontWeight: '600',
      '&:hover': {
        backgroundColor: 'white',
      },
      '&:active': {
        backgroundColor: ROOT.color.aiax.secondary,
        color: 'white',
      },
    },
  },
  orange: {
    filled: {
      backgroundColor: ROOT.color.orange.primary,
      color: 'white',
      borderRadius: '5px',
      padding: '10px 26px',
      border: 'none',
      fontWeight: '600',
      '&:hover': {
        backgroundColor: ROOT.color.orange.secondary,
      },
      '&:active': {
        color: 'white',
        backgroundColor: ROOT.color.orange.secondary,
      },
    },
    outlined: {
      color: ROOT.color.orange.primary,
      padding: '10px 26px',
      backgroundColor: 'transparent',
      border: `${ROOT.color.orange.primary} solid 1px`,
      fontWeight: '600',
      '&:hover': {
        backgroundColor: 'white',
      },
      '&:active': {
        backgroundColor: ROOT.color.orange.secondary,
        color: 'white',
      },
    },
  },
  gold: {
    filled: {
      backgroundColor: ROOT.color.gold.primary,
      color: 'white',
      borderRadius: '5px',
      padding: '10px 26px',
      border: 'none',
      fontWeight: '600',
      '&:hover': {
        backgroundColor: ROOT.color.gold.secondary,
      },
      '&:active': {
        backgroundColor: ROOT.color.gold.secondary,
        color: 'white',
      },
    },
    outlined: {
      color: ROOT.color.gold.primary,
      backgroundColor: 'transparent',
      borderRadius: '5px',
      padding: '10px 26px',
      border: `${ROOT.color.gold.primary} solid 1px`,
      '&:hover': {
        color: '#fff',
        backgroundColor: ROOT.color.gold.secondary,
      },
      '&:active': {
        color: '#fff',
        backgroundColor: ROOT.color.gold.secondary,
      },
    },
  },
};
