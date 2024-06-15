import { css } from '@emotion/react';

export const WarnNotificationRoot = css`
  width: fit-content;
  height: auto;
  padding: 0.25rem 1rem 0.25rem 0.5rem;
  background-color: #ffffe0;
  border: solid 1px yellow;
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  justify-content: left;
  align-items: center;
`;

export const SuccessNotificationRoot = css`
  width: fit-content;
  height: auto;
  padding: 0.25rem 1rem 0.25rem 0.5rem;
  background-color: #90ee90;
  border: solid 1px green;
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  justify-content: left;
  align-items: center;
`;

export const InfoNotificationRoot = css`
  width: fit-content;
  height: auto;
  padding: 0.25rem 1rem 0.25rem 0.5rem;
  background-color: #add8e6;
  border: solid 1px blue;
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  justify-content: left;
  align-items: center;
`;

export const ErrorNotificationRoot = css`
  width: fit-content;
  height: auto;
  padding: 0.25rem 1rem 0.25rem 0.5rem;
  background-color: #ffb6c1;
  border: solid 1px red;
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  justify-content: left;
  align-items: center;
`;

export const NotificationBody = css`
  font-size: 0.75rem;
`;
