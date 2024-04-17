import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import {
  AtomDetails,
  AtomDiv,
  AtomDropDown,
  AtomLabel,
  AtomParagraph,
  AtomSelector,
  AtomSummary,
  OptionList,
} from '../.';

const optionSelector: OptionList = [
  { value: 'opt1', option: 'Option 1' },
  {
    optGroup: 'Group',
    optionList: [
      { value: 'opt2', option: 'Option 2' },
      { value: 'opt3', option: 'Option 3' },
    ],
  },
];

const App = () => {
  return (
    <AtomDiv>
      <AtomSelector list={optionSelector} />

      <AtomDropDown summary={<AtomLabel>This is a label</AtomLabel>}>
        <AtomParagraph>Esta es una descripción</AtomParagraph>
      </AtomDropDown>

      <AtomDetails>
        <AtomSummary>
          <AtomLabel>Atom Summary</AtomLabel>
        </AtomSummary>
        <AtomParagraph>
          Este es un parafo dentro de una etiqueta Details
        </AtomParagraph>
      </AtomDetails>
    </AtomDiv>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
