import styled from 'styled-components';
import { FiAlertTriangle, FiCheckSquare, FiInfo, FiXOctagon } from 'react-icons/fi';
import { AtomDivProps, Paragraph, AtomSection } from '../element';

export type NotificationType = 'warn' | 'success' | 'info' | 'error';

export type NotificationKUIProps = AtomDivProps & {
  type: NotificationType;
  description: string;
};

// Estilos para las notificaciones
export const NotificationRoot = styled(AtomSection)<{ type: NotificationType }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  ${(props) => {
    switch (props.type) {
      case 'warn':
        return `
          width: fit-content;
          height: auto;
          padding: 0.25rem 1rem 0.25rem 0.5rem;
          background-color: #ffffe0;
          border: solid 1px #cb9d06;
          border-radius: 0.5rem;
          box-sizing: border-box;
          display: flex;
          gap: 1rem;
          justify-content: left;
          align-items: center;
        `;
      case 'success':
        return `
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
      case 'info':
        return `
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
      case 'error':
        return `
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
      default:
        return 'font-size: 0.75rem;';
    }
  }}
`;

// Estilo para el cuerpo de la notificación
export const NotificationBody = styled(Paragraph)`
  margin-left: 1rem;
`;

// Iconos y colores asociados a cada tipo de notificación
export const notificationData = {
  warn: { icon: FiAlertTriangle, color: '#CB9D06' },
  success: { icon: FiCheckSquare, color: 'green' },
  info: { icon: FiInfo, color: 'blue' },
  error: { icon: FiXOctagon, color: 'red' },
};