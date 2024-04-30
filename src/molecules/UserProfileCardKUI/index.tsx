import {
  UserProfileCardRoot,
  UserProfileCardImage,
  UserProfileCardHead,
  UserProfileCardBody,
} from './styles';
import { AtomDiv, AtomHeading, AtomImage, AtomParagraph } from '../../element';

export type UserProfileCardKUIProps = {
  image?: string;
  head: string;
  body: string;
};

export const UserProfileCardKUI = ({
  image,
  head,
  body,
}: UserProfileCardKUIProps) => (
  <AtomDiv>
    <section css={UserProfileCardRoot} className="KUI-user-profile-card-root">
      <div>
        <AtomImage
          src={image}
          css={UserProfileCardImage}
          className="KUI-user-profile-card-image"
        />
      </div>
      <div>
        <AtomHeading
          variant="h4"
          css={UserProfileCardHead}
          className="KUI-user-profile-card-head"
        >
          {head}
        </AtomHeading>
        <AtomParagraph
          css={UserProfileCardBody}
          className="KUI-user-profile-card-body"
        >
          {body}
        </AtomParagraph>
      </div>
    </section>
  </AtomDiv>
);
