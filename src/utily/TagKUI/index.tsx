import { AtomDiv, AtomDivProps, AtomParagraph } from '../../element';
import { styleTag } from './styles';

export type TagKUIProps = AtomDivProps & {
  label: string;
};

export const TagKUI = ({ label }: TagKUIProps) => {
  return (
    <AtomDiv className="KUI-tag-root" css={styleTag}>
      <AtomParagraph className="KUI-tag-paragraph">{label}</AtomParagraph>
    </AtomDiv>
  );
};
