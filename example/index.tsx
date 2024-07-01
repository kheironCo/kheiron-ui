import 'react-app-polyfill/ie11';
import { createRoot } from 'react-dom/client';
import {
  AtomButton,
  AtomDetails,
  AtomDialog,
  AtomDiv,
  DropDownKUI,
  AtomLabel,
  Paragraph,
  SelectorKUI,
  AtomSummary,
  OptionList,
  AtomHeading,
  AtomListItem,
  AtomList,
  PasswordInputKUI,
  InputFieldPasswordKUI,
  InputFieldRadioCheckKUI,
  IconHeartFilled,
  IconHeartOutlined,
} from '../src';
import { useState } from 'react';
import FormLayer from './components/FormLayer';
//import { InputFieldKUI } from '../src/molecules/InputFieldKUI';

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
  return (
    <AtomDiv>
      <FormLayer />

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
        <Paragraph>Esta es una descripción</Paragraph>

        <DropDownKUI
          summary={
            <AtomHeading variant="h4" style={{ margin: '0', padding: '0.25rem 0.5rem' }}>
              Titulo del Drop-Down
            </AtomHeading>
          }
        >
          <Paragraph>Esta es una descripción</Paragraph>
          <DropDownKUI
            summary={
              <AtomHeading variant="h4" style={{ margin: '0', padding: '0.25rem 0.5rem' }}>
                Titulo del Drop-Down
              </AtomHeading>
            }
          >
            <Paragraph>Esta es una descripción</Paragraph>
          </DropDownKUI>
        </DropDownKUI>
      </DropDownKUI>

      <AtomDialog open={tg}>
        <AtomDiv>
          <SelectorKUI list={optionSelector} />

          <DropDownKUI summary={<AtomLabel>This is a label</AtomLabel>}>
            <Paragraph>Esta es una descripción</Paragraph>
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
        <option value="Chrome"></option>
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
          <Paragraph>Este es un parafo dentro de una etiqueta Details</Paragraph>
        </AtomDiv>
      </AtomDetails>

      <hr />
      <InputFieldPasswordKUI />
      <hr />
      <PasswordInputKUI />
      <PasswordInputKUI />
      <PasswordInputKUI />

      <hr />
      <InputFieldRadioCheckKUI
        icon={<IconHeartFilled />}
        iconChecked={<IconHeartOutlined />}
        items={[
          { label: 'Ejemplo1', value: 'valor1' },
          { label: 'Ejemplo2', value: 'valor2' },
          { label: 'Ejemplo3', value: 'valor3' },
          { label: 'Ejemplo4', value: 'valor4' },
          { label: 'Ejemplo5', value: 'valor5' },
        ]}
      ></InputFieldRadioCheckKUI>
    </AtomDiv>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(<App />);
