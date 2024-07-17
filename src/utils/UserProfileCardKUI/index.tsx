import { UserProfileCardRoot, UserProfileCardHead, UserProfileCardBody } from './styles';
import { AtomDiv, AtomDivProps, Heading, Paragraph, AtomSection } from '../../element';
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
    <AtomSection css={UserProfileCardRoot} className="KUI-user-profile-card-root">
      <AtomDiv>
        <AvatarKUI imgSrc={image} altText={head} />
      </AtomDiv>
      <AtomDiv>
        <Heading variant="h4" css={UserProfileCardHead} className="KUI-user-profile-card-head">
          {head}
        </Heading>
        <Paragraph css={UserProfileCardBody} className="KUI-user-profile-card-body">
          {body}
        </Paragraph>
      </AtomDiv>
    </AtomSection>
  </AtomDiv>
);
