import { AtomDiv, AtomInput, AtomLabel } from '@KUI-element';
import { LabelKUI, LabelKUIProps } from 'form/base';
import { ChangeEvent, ReactElement, useState } from 'react';

import { IconRadioClose, IconRadioOpen } from '@KUI-icons';
import { styles } from './styles';



export type RadioCheckItem = {
  label: string; value: string;
}[];

export type InputFieldRadioCheckKUIProps= LabelKUIProps & {
  value?: string;
  getValue: (value:string) => void;
  items: RadioCheckItem;
  icon: ReactElement;
  iconChecked: ReactElement;
}


export const InputFieldRadioCheckKUI: React.FC<InputFieldRadioCheckKUIProps> = ({
  value,
  getValue,
  items,
  icon = <IconRadioOpen className="abierto"/>,
  iconChecked = <IconRadioClose className="cerrado"/>,
}: InputFieldRadioCheckKUIProps) => {

  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(event.target.value);
    value = event.target.value
    setSelectedRadio(value);
  };

  return (
    <>
      <LabelKUI>
        <AtomDiv>
          {items?.map((el, index) => (
            <>
              <AtomDiv className="flexing" css={styles}>
                <AtomDiv className="div">
                <AtomInput
                  className="input"
                  id={el.label}
                  key={index}
                  type="radio"
                  value={el.value}
                  checked={selectedRadio === el.value}
                  onChange={handleRadioChange}
                ></AtomInput>
                
                {selectedRadio === el.value && icon}
                {selectedRadio !== el.value && iconChecked}

                <AtomLabel htmlFor={el.label} className="radio-label">
                  {el.label}
                </AtomLabel>
                </AtomDiv>
              </AtomDiv>
            </>
          ))}
        </AtomDiv>
      </LabelKUI>
    </>
  );
};
