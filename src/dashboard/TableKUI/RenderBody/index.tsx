import { RenderTableBodyProps } from '../type';
import { BodyTrStyled, BodyTdStyled } from '../styles';

export const RenderBody = <B, C extends string>({
  keys,
  renderBody,
  valueRow,
  row,
}: RenderTableBodyProps<B, C>) => {
  return (
    <BodyTrStyled key={row} className={`KUI-table-body-row KUI-table-body-row-${row} `}>
      {keys.map((key, column) => (
        <BodyTdStyled
          key={`KUI-table-body-cell-${key}-row-${row}-column-${column}`}
          className={`KUI-table-body-cell KUI-table-body-cell-${key}-row-${row}-column-${column}`}
        >
          {renderBody
            ? renderBody({ value: valueRow[key], key, row, column, valueRow })
            : valueRow[key]?.toString()}
        </BodyTdStyled>
      ))}
    </BodyTrStyled>
  );
};
