import { AtomDiv, AtomInput } from '@KUI-element';
import { LabelKUI } from 'form/base';
import { ChangeEvent, useState } from 'react';

export type InputFieldRadioCheckKUIProps = {
  radio: { name: string, value: string }[],
};

const InputFieldRadioCheckKUI: React.FC<InputFieldRadioCheckKUIProps> = ({ radio }) => {
    
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedRadio(value);
  };

  return (
    <>
      {radio.map((el, index) => (
        
            <LabelKUI key={index}>
                <AtomDiv>
                    <AtomInput
                    type="radio"
                    value={el.name}
                    checked={selectedRadio === el.name}
                    onChange={handleRadioChange}
                    />
                    {el.value}
                </AtomDiv>
            </LabelKUI>
      ))}
    </>
  );
};

export default InputFieldRadioCheckKUI;
