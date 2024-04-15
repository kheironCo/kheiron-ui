import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { AtomDiv, AtomSelector, OptionList } from '../.';

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
    </AtomDiv>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
