import { AtomDiv, AtomTbody } from '../../element';
import { HeaderTrStyled, THeaderStyled, TableStyled, Pagination } from './styles';
import { TableKUIProps } from './type';
import { RenderBody } from './RenderBody';
import { RenderHead } from './RenderHead';
import { PaginationKUI } from '../PaginationKUI';
import { useState } from 'react';

export const TableKUI = <B, H extends string, C extends string>({
  keys,
  head,
  body,
  renderHead,
  renderBody,
  className,
  limit,
  neighbors,
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

  const limitPage = typeof limit === 'number' ? limit : body.length;

  const totalPages = Math.ceil(body.length / limitPage);

  const [dataBody, setDataBody] = useState<typeof body>(body.slice(0, limit));

  const onChange = (page: number) => {
    const index = (page - 1) * limitPage;
    setDataBody(body.slice(index, index + limitPage));
  };

  return (
    <AtomDiv {...rest} className={`KUI-table-root ${className}`}>
      <TableStyled className="KUI-table">
        <THeaderStyled className="KUI-table-thead">
          <HeaderTrStyled className="KUI-table-thead-tr">
            {keys.map((key, column) => (
              <RenderHead
                key={`KUI-table-header-${key}-column-${column}`}
                keyType={key}
                renderHead={renderHead}
                head={head}
                column={column}
              />
            ))}
          </HeaderTrStyled>
        </THeaderStyled>
        <AtomTbody className="KUI-table-tbody">
          {dataBody.map((valueRow, row) => (
            <RenderBody
              key={row}
              keys={keys}
              renderBody={renderBody}
              valueRow={valueRow}
              row={row}
            />
          ))}
        </AtomTbody>
      </TableStyled>
      <Pagination>
        <PaginationKUI {...{ totalPages, neighbors, onChange }} />
      </Pagination>
    </AtomDiv>
  );
};
