import { UserProfileCardRoot, UserProfileCardHead, UserProfileCardBody } from './styles';
import { AtomDiv, AtomDivProps } from '../../element';
import { AvatarKUI } from '../AvatarKUI';

export type UserProfileCardKUIProps = AtomDivProps & {
  image: string;
  head: string;
  body: string;
};

export const UserProfileCardKUI = ({
  image = '',
  head,
  body,
  ...rest
}: UserProfileCardKUIProps) => (
  <AtomDiv {...rest}>
    <UserProfileCardRoot  className="KUI-user-profile-card-root">
      <AtomDiv>
        <AvatarKUI imgSrc={image} altText={head} />
      </AtomDiv>
      <AtomDiv>
        <UserProfileCardHead variant="h4" className="KUI-user-profile-card-head">
          {head}
        </UserProfileCardHead>
        <UserProfileCardBody className="KUI-user-profile-card-body">
          {body}
        </UserProfileCardBody>
      </AtomDiv>
    </UserProfileCardRoot>
  </AtomDiv>
);
