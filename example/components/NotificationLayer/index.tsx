import { useState } from 'react';
import { ButtonKUI, NotificationKUI } from '../../../src';

export const NotificationLayer = () => {
  // const notify = {
  //     push() {

  //     }
  // }
  const [open, setOpen] = useState(true);
  return (
    <>
      <dialog
        open={open}
        style={{
          width: '100vw',
          height: '0',
          margin: '0',
          padding: '0',
          border: 'none',
          background: 'none',
          position: 'absolute',
          top: '0',
          right: '0',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'end',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <NotificationKUI type="warn" description="warning" />
          <NotificationKUI type="success" description="Success" />
        </div>
      </dialog>
      <ButtonKUI onClick={() => setOpen((old) => !old)}>Push notify</ButtonKUI>
    </>
  );
};
