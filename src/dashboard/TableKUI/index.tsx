import { AtomDiv, AtomTbody } from '../../element';
import { useMemo } from 'react';
import {
  ThStyled,
  BodyTdStyled,
  BodyTrStyled,
  HeaderTrStyled,
  THeaderStyled,
  TableStyled,
} from './styles';
import { TableKUIProps } from './type';

export const TableKUI = <B, H extends string, C extends string>({
  keys,
  head,
  body,
  renderHead,
  renderBody,
  onRow,
  className,
  ...rest
}: TableKUIProps<B, H, C>) => {
  const uniqueKeys = Array.from(new Set(keys));
  if (uniqueKeys.length !== keys.length) {
    throw new Error(`The key array contains duplicate keys: ${keys}`);
  }
  if (!Array.isArray(keys)) {
    throw new Error('The property "keys" must be an array of strings.');
  }
  if (typeof head !== 'object') {
    throw new Error('The property "head" must be an object.');
  }
  if (!Array.isArray(body)) {
    throw new Error('The property "body" must be an array de objects.');
  }

  const _renderHead = useMemo(
    () =>
      keys.map((key, column) => (
        <ThStyled
          key={`KUI-table-header-${key}-column-${column}`}
          className={`KUI-table-header-${key}-column-${column}`}
        >
          {renderHead ? renderHead({ value: head[key], key, column }) : head[key]}
        </ThStyled>
      )),
    [keys, head, renderHead],
  );

  const _renderBody = useMemo(
    () =>
      body.map((valueRow, row) => {
        const propsTr = onRow ? onRow(valueRow) : {};

        return (
          <BodyTrStyled
            {...propsTr}
            key={row}
            className={`KUI-table-body-row KUI-table-body-row-${row} ${propsTr.className}`}
          >
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
      }),
    [keys, body, renderBody],
  );

  return (
    <AtomDiv {...rest} className={`KUI-table-root ${className}`}>
      <TableStyled className="KUI-table">
        <THeaderStyled className="KUI-table-thead">
          <HeaderTrStyled className="KUI-table-thead-tr">{_renderHead}</HeaderTrStyled>
        </THeaderStyled>
        <AtomTbody className="KUI-table-tbody">{_renderBody}</AtomTbody>
      </TableStyled>
    </AtomDiv>
  );
};
