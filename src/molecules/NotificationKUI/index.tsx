import React from 'react';
import { AtomDiv, AtomDivProps, AtomParagraph, AtomSection, AtomSpan } from '../../element';

export type NotificationType = 'warn' | 'success' | 'info' | 'error';

export type NotificationKUIProps = AtomDivProps & {
  type: NotificationType;
  description: string;
};

/*
Lógica para asignar icono y clase en base al NotificationType

Se que hay una manera de unificar estas dos funciones para que los strings de la clase y del icono retornen en una sola estructura, pero para tener el componente listo de forma mas rápida prefiero separarlos. Cualquier sugerencia es bien recibida.
*/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const icon = (type: NotificationType) => {
  switch (type) {
    case 'warn':
    case 'success':
    case 'info':
    case 'error':
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notificationClass = (type: NotificationType) => {
  switch (type) {
    case 'warn':
    case 'success':
    case 'info':
    case 'error':
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NotificationKUI = ({ type = 'info', description, ...rest }: NotificationKUIProps) => (
  <AtomDiv {...rest}>
    <AtomSection className="KUI-user-profile-card-root">
      <AtomDiv>
        <AtomSpan></AtomSpan>
      </AtomDiv>
      <AtomDiv>
        <AtomParagraph className="KUI-user-profile-card-body">{description}</AtomParagraph>
      </AtomDiv>
    </AtomSection>
  </AtomDiv>
);
