import { AtomDiv, AtomTable, AtomTbody, AtomTd, AtomTh, AtomThead, AtomTr } from '../../element';
import { useMemo } from 'react';
import {
  TableBodyCellStyle,
  TableBodyRowStyle,
  TableHeaderCellStyle,
  TableHeaderRowStyle,
  TableHeaderStyle,
  TableStyle,
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
    throw new Error('La propiedad "keys" debe ser un array de strings.');
  }
  if (typeof head !== 'object') {
    throw new Error('La propiedad "head" debe ser un objeto.');
  }
  if (!Array.isArray(body)) {
    throw new Error('La propiedad "body" debe ser un array de objetos.');
  }

  const _renderHead = useMemo(
    () =>
      keys.map((key, column) => (
        <AtomTh
          key={`KUI-table-header-${key}-column-${column}`}
          className={`KUI-table-header-${key}-column-${column}`}
          css={TableHeaderCellStyle}
        >
          {renderHead ? renderHead({ value: head[key], key, column }) : head[key]}
        </AtomTh>
      )),
    [keys, head, renderHead],
  );

  const _renderBody = useMemo(
    () =>
      body.map((valueRow, row) => {
        const propsTr = onRow ? onRow(valueRow) : {};

        return (
          <AtomTr
            {...propsTr}
            key={row}
            className={`KUI-table-body-row KUI-table-body-row-${row} ${propsTr.className}`}
            css={[TableBodyRowStyle, propsTr?.css]}
          >
            {keys.map((key, column) => (
              <AtomTd
                key={`KUI-table-body-cell-${key}-row-${row}-column-${column}`}
                className={`KUI-table-body-cell KUI-table-body-cell-${key}-row-${row}-column-${column}`}
                css={TableBodyCellStyle}
              >
                {renderBody
                  ? renderBody({ value: valueRow[key], key, row, column, valueRow })
                  : valueRow[key]?.toString()}
              </AtomTd>
            ))}
          </AtomTr>
        );
      }),
    [keys, body, renderBody],
  );

  return (
    <AtomDiv {...rest} className={`KUI-table-root ${className}`}>
      <AtomTable css={TableStyle} className="KUI-table">
        <AtomThead css={TableHeaderStyle} className="KUI-table-thead">
          <AtomTr css={TableHeaderRowStyle} className="KUI-table-thead-tr">
            {_renderHead}
          </AtomTr>
        </AtomThead>
        <AtomTbody className="KUI-table-tbody">{_renderBody}</AtomTbody>
      </AtomTable>
    </AtomDiv>
  );
};
