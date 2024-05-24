import { AtomDiv, AtomInput, AtomLabel } from '@KUI-element';
import { LabelKUI } from 'form/base';
import { ChangeEvent, useState } from 'react';

import { IconRadioClose } from '@KUI-icons';
import { IconRadioOpen } from '@KUI-icons';
import { styles } from './styles';



export type InputFieldRadioCheckKUIProps = {
  radio: { label: string, value: string }[],
};

export const InputFieldRadioCheckKUI: React.FC<InputFieldRadioCheckKUIProps> = ({ radio }) => {
    
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedRadio(value);
  };

  return (
    <>
    <LabelKUI >
                <AtomDiv >
      {radio.map((el, index) => (
        
          <>
            
            <AtomDiv className='flexing' css={styles}>
                    <AtomInput
                    className="input"
                    id={el.label}
                    key={index}
                    type="radio"
                    value={el.value}
                    checked={selectedRadio === el.value}
                    onChange={handleRadioChange}
                    >
                      </AtomInput>
                    
                    {
                      selectedRadio === el.value &&
                    <IconRadioOpen className="abierto" />
                    
                    }
                    {
                      selectedRadio !== el.value &&
                      <IconRadioClose className="cerrado"/>
                    }
                      
                      <AtomLabel htmlFor={el.label} className="radio-label" >{el.label}</AtomLabel>
                      
                    </AtomDiv>
                    
          </>
      ))
      }
      </AtomDiv>
      </LabelKUI>
    </>
  );
};

