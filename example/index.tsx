import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import {
  AtomButton,
  AtomDetails,
  AtomDialog,
  AtomDiv,
  DropDownKUI,
  AtomLabel,
  AtomParagraph,
  SelectorKUI,
  AtomSummary,
  OptionList,
  AtomHeading,
  AtomListItem,
  AtomList,
} from '../src';
import { useState } from 'react';
import { InputFieldKUI } from '../src/molecules/InputFieldKUI';

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
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: any): void => {
    setInputValue(event.target.value);
  };
  return (
    <AtomDiv>
      <InputFieldKUI label="Nombre" value={inputValue} handleChange={handleChange} />

      <AtomList>
        <AtomListItem>lista</AtomListItem>
        <AtomListItem>lista</AtomListItem>
        <AtomListItem>lista</AtomListItem>
      </AtomList>

      <SelectorKUI list={optionSelector} />

      <DropDownKUI
        summary={
          <AtomHeading variant="h4" style={{ margin: '0', padding: '0.25rem 0.5rem' }}>
            Titulo del Drop-Down
          </AtomHeading>
        }
      >
        <AtomParagraph>Esta es una descripción</AtomParagraph>

        <DropDownKUI
          summary={
            <AtomHeading variant="h4" style={{ margin: '0', padding: '0.25rem 0.5rem' }}>
              Titulo del Drop-Down
            </AtomHeading>
          }
        >
          <AtomParagraph>Esta es una descripción</AtomParagraph>
          <DropDownKUI
            summary={
              <AtomHeading variant="h4" style={{ margin: '0', padding: '0.25rem 0.5rem' }}>
                Titulo del Drop-Down
              </AtomHeading>
            }
          >
            <AtomParagraph>Esta es una descripción</AtomParagraph>
          </DropDownKUI>
        </DropDownKUI>
      </DropDownKUI>

      <AtomDialog open={tg}>
        <AtomDiv>
          <SelectorKUI list={optionSelector} />

          <DropDownKUI summary={<AtomLabel>This is a label</AtomLabel>}>
            <AtomParagraph>Esta es una descripción</AtomParagraph>
          </DropDownKUI>

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
      <label>
        Choose a browser from this list: <input list="browsers" name="myBrowser" />
      </label>
      <datalist id="browsers">
        <option value="Chrome">
          <AtomButton style={{ backgroundColor: 'blue' }}>Boton</AtomButton>
        </option>
        <option value="Firefox"></option>
        <option value="Internet Explorer"></option>
        <option value="Opera"></option>
        <option value="Safari"></option>
        <option value="Microsoft Edge"></option>
      </datalist>

      <AtomDetails id="details-id">
        <AtomSummary>
          <AtomDiv className="KUI-summary-icon-root">
            <AtomDiv className="KUI-summary-icon KUI-summary-icon-horizontal"></AtomDiv>
            <AtomDiv className="KUI-summary-icon KUI-summary-icon-vertical"></AtomDiv>
            {/* <AtomDiv className="KUI-summary-icon">▹</AtomDiv> */}
          </AtomDiv>
          <AtomHeading variant="h5" style={{ width: '100%', margin: 0 }}>
            Atom Summary
          </AtomHeading>
        </AtomSummary>
        <AtomDiv
          className="KUI-details-content"
          style={{
            overflow: 'hidden',
            maxHeight: 'auto',
            transition: 'all 1s ease',
          }}
        >
          <AtomParagraph>Este es un parafo dentro de una etiqueta Details</AtomParagraph>
        </AtomDiv>
      </AtomDetails>
    </AtomDiv>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
