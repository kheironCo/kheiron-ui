import { AtomTable, AtomTbody, AtomTd, AtomTh, AtomThead, AtomTr } from '@KUI-element';
import { useMemo } from 'react';
import { TableBodyCellStyle, TableHeaderCellStyle, TableHeaderStyle, TableStyle } from './styles';
import { TableKUIProps } from './type';

export const TableKUI = <B, H extends string, C extends string>({
  keys,
  head,
  body,
  renderHead,
  renderBody,
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
      body.map((valueRow, row) => (
        <AtomTr key={row} className={`KUI-table-body-row-${row}`}>
          {keys.map((key, column) => (
            <AtomTd
              key={`KUI-table-cell-${key}-row-${row}-column-${column}`}
              className={`KUI-table-cell-${key}-row-${row}-column-${column}`}
              css={TableBodyCellStyle}
            >
              {renderBody
                ? renderBody({ value: valueRow[key], key, row, column })
                : valueRow[key]?.toString()}
            </AtomTd>
          ))}
        </AtomTr>
      )),
    [keys, body, renderBody],
  );

  return (
    <AtomTable css={TableStyle}>
      <AtomThead css={TableHeaderStyle}>
        <AtomTr>{_renderHead}</AtomTr>
      </AtomThead>
      <AtomTbody>{_renderBody}</AtomTbody>
    </AtomTable>
  );
};
