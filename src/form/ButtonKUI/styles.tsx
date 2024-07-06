import styled, { css } from 'styled-components';
import ROOT from '../../common/root';
import { AtomButton } from '../../element';
import { ButtonListType, StyleProps } from './type';

const ButtonList: ButtonListType = {
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

export const ButtonStyle = styled(AtomButton)<StyleProps>`
  min-height: 24px;
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;

  ${({ variant = 'filled', palette = 'primary' }) => css`
    color: ${ButtonList[palette][variant].color};
    background-color: ${ButtonList[palette][variant].backgroundColor};
    border-radius: ${ButtonList[palette][variant].borderRadius};
    padding: ${ButtonList[palette][variant].padding};
    border: ${ButtonList[palette][variant].border};
    &:hover {
      color: ${ButtonList[palette][variant]['&:hover'].color};
      background-color: ${ButtonList[palette][variant]['&:hover'].backgroundColor};
    }
    &:active {
      color: ${ButtonList[palette][variant]['&:active'].color};
      background-color: ${ButtonList[palette][variant]['&:active'].backgroundColor};
    }
  `}
`;
