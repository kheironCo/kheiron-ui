import { LabelKUI } from 'form';

export default {
  title: 'Form/LabelKUI',
  component: LabelKUI,
  argTypes: {
    label: {
      description: 'Define the text of the input',
    },

    position: {
      description: 'Define if the position',
    },
    align: {
      description: 'Define where the text is align',
    },
    children: {
      description: 'Define the Children Text',
    },
  },
};

export const Default = {
  args: {
    label: 'Título:',
    position: 'top',
    align: 'left',
    children:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut dui quis dui aliquet lobortis. Sed vel leo volutpat, sodales dolor in, dapibus elit. Vestibulum massa lacus, volutpat eu mattis ac, semper quis quam. Vestibulum finibus libero consectetur erat dignissim, in sodales nunc varius. Pellentesque quis commodo velit. Donec sit amet lacinia ipsum. Pellentesque sit amet porta tellus. Morbi libero turpis, fermentum eget lectus quis, egestas semper quam. Ut sit amet dolor at elit ultricies placerat. Vivamus id gravida odio, venenatis blandit ligula. Suspendisse at imperdiet sem, ut congue neque. Sed ornare elit nec lacinia eleifend. Vestibulum est nisi, suscipit id vestibulum sit amet, gravida non est. Duis lobortis venenatis erat, vitae sagittis risus dapibus ut.',
  },
};
