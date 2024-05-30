import {  useMemo} from 'react';
import { AtomDiv, AtomParagraph } from '../../element';
import { stylesBackground, stylesBorder } from './styles';
import { TagKUIProps } from './types';


export const TagKUI = ({ label, color= "main", border="none" }: TagKUIProps) => {

  let styleColor = useMemo(()=> stylesBackground[color], [color]);
  let styleBorder = useMemo(()=>stylesBorder[border], [border])

  return (
    <AtomDiv className="KUI-tag-root" css={[styleColor, styleBorder]} >
      <AtomParagraph className="KUI-tag-paragraph">{label}</AtomParagraph>
    </AtomDiv>
  );
};