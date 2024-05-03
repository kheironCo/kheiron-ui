import { UserProfileCardRoot, UserProfileCardHead, UserProfileCardBody } from './styles';
import { AtomDiv, AtomHeading, AtomParagraph, AtomSection } from '../../element';
import { AvatarKUI } from '../../atom';

export type UserProfileCardKUIProps = {
  image?: string;
  head: string;
  body: string;
};

export const UserProfileCardKUI = ({ image, head, body }: UserProfileCardKUIProps) => (
  <AtomDiv>
    <AtomSection css={UserProfileCardRoot} className="KUI-user-profile-card-root">
      <AtomDiv>
        <AvatarKUI imgSrc={image} altText={head} />
      </AtomDiv>
      <AtomDiv>
        <AtomHeading variant="h4" css={UserProfileCardHead} className="KUI-user-profile-card-head">
          {head}
        </AtomHeading>
        <AtomParagraph css={UserProfileCardBody} className="KUI-user-profile-card-body">
          {body}
        </AtomParagraph>
      </AtomDiv>
    </AtomSection>
  </AtomDiv>
);
