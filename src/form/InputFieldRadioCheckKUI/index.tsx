import { AtomDiv, AtomInput, AtomInputProps } from '../../element';
import { ChangeEvent, ReactElement, useState } from 'react';

import { IconRadioClose2, IconRadioOpen2 } from '../../icons';
import { LabelKUI, LabelKUIProps } from '../base';

import { AtomDivComponentStyled } from './styles';

export type RadioCheckItem = {
  label: string;
  value: string;
};
export type InputFieldRadioCheckKUIProps = Pick<LabelKUIProps, 'position'> &
  AtomInputProps & {
    initValue?: string;
    value?: string;
    getValue?: (value: string) => void;
    items: RadioCheckItem[];
    icon?: ReactElement;
    iconChecked?: ReactElement;
  };

export const InputFieldRadioCheckKUI: React.FC<InputFieldRadioCheckKUIProps> = ({
  initValue,
  value,
  getValue,
  items,
  icon = <IconRadioOpen2 />,
  iconChecked = <IconRadioClose2 />,
  position = 'right',
  onChange,
  ...rest
}: InputFieldRadioCheckKUIProps) => {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(initValue || null);

  const flatValues = items.map((element) => element.value);
  const uniqueValues = Array.from(new Set(flatValues));

  if (uniqueValues.length !== flatValues.length)
    console.warn('The property "value" have been unique');

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(event.target.value);
    if (onChange) onChange(event);
    value = event.target.value;
    setSelectedRadio(value);
  };

  return (
    <AtomDivComponentStyled>
      {items?.map((el, index) => (
        <AtomDiv className="KUI-input-field-radio-check-root" key={index}>
          <LabelKUI
            position={position}
            htmlFor={`${el.value}-${index}`}
            label={el.label}
            className={`'KUI-input-field-radio-check-label KUI-input-field-radio-check-label-${index}'`}
          >
            <AtomDiv>
              <AtomInput
                className="KUI-input-field-radio-check-input"
                key={index}
                type="radio"
                value={el.value}
                checked={selectedRadio === el.value}
                onChange={handleRadioChange}
                {...rest}
              />
              {selectedRadio === el.value ? icon : iconChecked}
            </AtomDiv>
          </LabelKUI>
        </AtomDiv>
      ))}
    </AtomDivComponentStyled>
  );
};
