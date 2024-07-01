import { AtomDiv, AtomDivProps, Paragraph, AtomSection } from '../element';
import { FiAlertTriangle, FiCheckSquare, FiInfo, FiXOctagon } from 'react-icons/fi';
import {
  WarnNotificationRoot,
  SuccessNotificationRoot,
  InfoNotificationRoot,
  ErrorNotificationRoot,
  NotificationBody,
} from './styles';

export type NotificationType = 'warn' | 'success' | 'info' | 'error';

export type NotificationKUIProps = AtomDivProps & {
  type: NotificationType;
  description: string;
};

/*
Lógica para asignar icono y clase en base al NotificationType
Se que hay una manera de unificar estas dos funciones para que los strings de la clase y del icono retornen en una sola estructura, pero para tener el componente listo de forma mas rápida prefiero separarlos. Cualquier sugerencia es bien recibida.
*/
const icon = (type: NotificationType) => {
  const warnIcon = { height: '2rem', color: '#CB9D06' };
  const successIcon = { height: '2rem', color: 'green' };
  const infoIcon = { height: '2rem', color: 'blue' };
  const errorIcon = { height: '2rem', color: 'red' };

  switch (type) {
    case 'warn':
      return <FiAlertTriangle style={warnIcon} />;
    case 'success':
      return <FiCheckSquare style={successIcon} />;
    case 'info':
      return <FiInfo style={infoIcon} />;
    case 'error':
      return <FiXOctagon style={errorIcon} />;
    default:
  }
};

const notificationClass = (type: NotificationType) => {
  switch (type) {
    case 'warn':
      return WarnNotificationRoot;
    case 'success':
      return SuccessNotificationRoot;
    case 'info':
      return InfoNotificationRoot;
    case 'error':
      return ErrorNotificationRoot;
  }
};

export const NotificationKUI = ({ type, description, ...rest }: NotificationKUIProps) => (
  <AtomDiv {...rest}>
    <AtomSection css={notificationClass(type)} className="KUI-user-profile-card-root">
      <AtomDiv>{icon(type)}</AtomDiv>
      <AtomDiv>
        <Paragraph css={NotificationBody} className="KUI-user-profile-card-body">
          {description}
        </Paragraph>
      </AtomDiv>
    </AtomSection>
  </AtomDiv>
);
