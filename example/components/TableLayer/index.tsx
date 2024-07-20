import { Fragment, useState } from 'react';
import { AtomDiv, ButtonKUI, ModalKUI, TableKUI, UserProfileCardKUI } from '../../../src';
import { generateFakeRow } from '../../../stories/dashboard/TableKUI/mock';

export const TableLayer = () => {
  const body = Array.from({ length: 50 }, (_, i) => {
    const data = {
      id: generateFakeRow().id,
      user: {
        ...generateFakeRow().user,
        email: 'kheiron-ui@example.com',
      },
    };

    return i % 5 === 0
      ? {
          id: 'KUI',
          user: {
            image: 'https://avatars.githubusercontent.com/u/158779561?s=48&v=4',
            name: 'Kheiron',
            email: 'kheiron-ui@example.com',
          },
        }
      : data;
  });
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <ButtonKUI onClick={() => setOpen((old) => !old)}>Table</ButtonKUI>
      <ModalKUI open={open} onClose={() => setOpen(false)}>
        <AtomDiv>
          <TableKUI
            keys={['id', 'user']}
            head={{ id: 'ID', user: 'User' }}
            body={body}
            limit={5}
            neighbors={1}
            renderBody={({ value, key }) => {
              switch (key) {
                case 'user': {
                  return (
                    <UserProfileCardKUI
                      image={value?.image || ''}
                      head={value?.name || ''}
                      body={value?.email || ''}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpen((old) => !old);
                      }}
                    />
                  );
                }
                default: {
                  return <>{String(value)}</>;
                }
              }
            }}
          />
        </AtomDiv>
      </ModalKUI>
    </Fragment>
  );
};
