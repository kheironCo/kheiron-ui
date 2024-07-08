import { RenderTableHeadProps } from '../type';
import { ThStyled } from '../styles';

export const RenderHead = <H extends string, C extends string>({
  keyType,
  renderHead,
  head,
  column,
}: RenderTableHeadProps<H, C>) => (
  <ThStyled
    key={`KUI-table-header-${keyType}-column-${column}`}
    className={`KUI-table-header-${keyType}-column-${column}`}
  >
    {renderHead ? renderHead({ value: head[keyType], key: keyType, column }) : head[keyType]}
  </ThStyled>
);
