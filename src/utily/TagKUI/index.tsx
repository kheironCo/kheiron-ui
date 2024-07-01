import { useMemo } from 'react';
import { AtomDiv, Paragraph } from '../../element';
import { stylesBackground, stylesBorder } from './styles';
import { TagKUIProps } from './types';

export const TagKUI = ({ label, color = 'main', border = 'none' }: TagKUIProps) => {
  const styleBackground = useMemo(() => stylesBackground[color], [color]);
  const styleBorder = useMemo(() => stylesBorder[border], [border]);

  return (
    <AtomDiv className="KUI-tag-root" css={[styleBackground, styleBorder]}>
      <Paragraph className="KUI-tag-paragraph">{label}</Paragraph>
    </AtomDiv>
  );
};
