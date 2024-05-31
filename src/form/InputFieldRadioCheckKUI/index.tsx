import { AtomDiv, AtomInput, AtomParagraph } from '../../element';
import { ChangeEvent, ReactElement, useState } from 'react';

import { IconRadioClose2, IconRadioOpen2 } from '../../icons';
import { styles } from './styles';
import { LabelKUI } from '../base';

export type RadioCheckItem = {
  label: string;
  value: string;
};
export type InputFieldRadioCheckKUIProps = {
  initValue?: string;
  value?: string;
  getValue: (value: string) => void;
  items: RadioCheckItem[];
  icon: ReactElement;
  iconChecked: ReactElement;
};

export const InputFieldRadioCheckKUI: React.FC<InputFieldRadioCheckKUIProps> = ({
  initValue = 'value',
  value,
  getValue,
  items,
  icon = <IconRadioOpen2 />,
  iconChecked = <IconRadioClose2 />,
}: InputFieldRadioCheckKUIProps) => {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(initValue || null);

  const flatValues = items.map((elemento) => elemento.value);
  const uniqueValues = Array.from(new Set(flatValues));

  if (uniqueValues.length !== flatValues.length)
    console.warn('The property "value" have been unique');

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(event.target.value);
    value = event.target.value;
    setSelectedRadio(value);
  };

  return (
    <AtomDiv css={styles}>
      {items?.map((el, index) => (
        <AtomDiv className="KUI-input-field-radio-check-root" key={index}>
          <AtomInput
            className="KUI-input-field-radio-check-input"
            id={`${el.value}-${index}`}
            key={index}
            type="radio"
            value={el.value}
            checked={selectedRadio === el.value}
            onChange={handleRadioChange}
          />
          {selectedRadio === el.value ? icon : iconChecked}

          <LabelKUI
            htmlFor={`${el.value}-${index}`}
            className={`'KUI-input-field-radio-check-label KUI-input-field-radio-check-label-${index}'`}
          >
            <AtomParagraph>{el.label}</AtomParagraph>
          </LabelKUI>
        </AtomDiv>
      ))}
    </AtomDiv>
  );
};
