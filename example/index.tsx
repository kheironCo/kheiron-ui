import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import {
  AtomButton,
  AtomDetails,
  AtomDialog,
  AtomDiv,
  AtomDropDown,
  AtomLabel,
  AtomParagraph,
  AtomSelector,
  AtomSummary,
  OptionList,
} from '../.';
import { useState } from 'react';

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
  const [tg, setTG] = useState(false);
  const [openDetail, setOpenDetail] = useState(true);

  return (
    <AtomDiv>
      <AtomSelector list={optionSelector} />

      <AtomDropDown summary={<AtomLabel>This is a label</AtomLabel>}>
        <AtomParagraph>Esta es una descripción</AtomParagraph>
      </AtomDropDown>

      <AtomDialog open={tg}>
        <AtomDiv>
          <AtomSelector list={optionSelector} />

          <AtomDropDown summary={<AtomLabel>This is a label</AtomLabel>}>
            <AtomParagraph>Esta es una descripción</AtomParagraph>
          </AtomDropDown>

          <AtomButton
            onClick={() => {
              setTG(false);
            }}
          >
            Close
          </AtomButton>
        </AtomDiv>
      </AtomDialog>

      <AtomButton
        onClick={() => {
          setTG(true);
        }}
      >
        Open
      </AtomButton>

      <AtomDetails open={openDetail}>
        <AtomSummary
          onClick={() => {
            setOpenDetail((old) => !old);
          }}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <AtomDiv
            style={{
              rotate: openDetail ? '90deg' : '0deg',
              transition: 'all 0.2s ease',
            }}
          >
            ▹
          </AtomDiv>
          <AtomLabel style={{ width: '100%' }}>Atom Summary</AtomLabel>
        </AtomSummary>
        <AtomDiv
          className={openDetail ? 'content' : ''}
          style={{
            overflow: 'hidden',
            // maxHeight: 'auto',
            backgroundColor: '#d4d4d4',
          }}
        >
          <AtomParagraph>
            Este es un parafo dentro de una etiqueta Details
          </AtomParagraph>
        </AtomDiv>
      </AtomDetails>
    </AtomDiv>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
