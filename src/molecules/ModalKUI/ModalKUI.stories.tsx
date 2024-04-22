import ModalKUI, { ModalKUIProps } from '.';
import { AtomButton } from '../../';

export default {
  title: 'Organism/Modal',
  component: ModalKUI,
};

export const Default: { args: ModalKUIProps } = {
  args: {
    open: true,
    children: <AtomButton variant="primary">Close</AtomButton>,
  },
};
