import { useState } from 'react';
import {
  AtomDiv,
  AtomButton,
  AtomDetails,
  AtomDialog,
  DropDownKUI,
  AtomLabel,
  Paragraph,
  SelectorKUI,
  AtomSummary,
  OptionList,
  Heading,
  AtomListItem,
  AtomList,
  PasswordInputKUI,
  InputFieldPasswordKUI,
  InputFieldRadioCheckKUI,
  IconHeartFilled,
  IconHeartOutlined,
} from '../src';

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

export const Thing = () => {
  const [tg, setTG] = useState(false);
  return (
    <AtomDiv>
      <AtomList>
        <AtomListItem>lista</AtomListItem>
        <AtomListItem>lista</AtomListItem>
        <AtomListItem>lista</AtomListItem>
      </AtomList>

      <SelectorKUI list={optionSelector} />

      <DropDownKUI
        summary={
          <Heading as="h4" style={{ margin: '0', padding: '0.25rem 0.5rem' }}>
            Titulo del Drop-Down
          </Heading>
        }
      >
        <Paragraph>Esta es una descripción</Paragraph>

        <DropDownKUI
          summary={
            <Heading as="h4" style={{ margin: '0', padding: '0.25rem 0.5rem' }}>
              Titulo del Drop-Down
            </Heading>
          }
        >
          <Paragraph>Esta es una descripción</Paragraph>
          <DropDownKUI
            summary={
              <Heading as="h4" style={{ margin: '0', padding: '0.25rem 0.5rem' }}>
                Titulo del Drop-Down
              </Heading>
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
          <Heading as="h5" style={{ width: '100%', margin: 0 }}>
            Atom Summary
          </Heading>
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
