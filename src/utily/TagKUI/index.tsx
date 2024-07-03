import { Paragraph } from '../../element';
import { DivStyled } from './styles';
import { TagKUIProps } from './types';

export const TagKUI = ({
  label,
  color,
  borderStyle = 'none',
  borderColor = 'gray',
  borderWidth = '1px',
  bgcolor,
}: TagKUIProps) => {
  return (
    <DivStyled
      className="KUI-tag-root"
      bgcolor={bgcolor}
      color={color}
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderWidth={borderWidth}
    >
      <Paragraph className="KUI-tag-paragraph">{label}</Paragraph>
    </DivStyled>
  );
};
