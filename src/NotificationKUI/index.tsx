
import { AtomDiv } from '../element';
import {NotificationRoot, NotificationBody, notificationData, NotificationKUIProps} from './styles'


export const NotificationKUI = ({ type, description, ...rest }: NotificationKUIProps) => {
  const { icon: Icon, color } = notificationData[type];

  return (
    <AtomDiv {...rest}>
      <NotificationRoot type={type} className="KUI-user-profile-card-root">
        <AtomDiv>
          <Icon style={{ height: '2rem', color }} />
        </AtomDiv>
        <NotificationBody className="KUI-user-profile-card-body">
          {description}
        </NotificationBody>
      </NotificationRoot>
    </AtomDiv>
  );
};