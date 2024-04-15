import React from 'react';
import { AtomOptGroup, AtomOption, AtomSelect } from '../Element';

type OptionType = {
  value: string;
  option: React.JSX.Element | string;
};
type OptGroupType = {
  optGroup: string;
  optionList: OptionType[];
};

export type OptionList = Array<OptionType | OptGroupType>;

export type AtomSelectorProps = {
  list: OptionList;
};

const OptionElement = ({ value, option }: OptionType) => (
  <AtomOption value={value}>{option}</AtomOption>
);

export const AtomSelector = ({ list }: AtomSelectorProps) => {
  const renderOptions = list.map((item, i) => {
    if ('optGroup' in item) {
      return (
        <AtomOptGroup key={`otp_group-${i}`} label={item.optGroup}>
          {item.optionList.map((element, j) => (
            <OptionElement
              key={`otp_group-${i}-${element.value}-${j}`}
              {...element}
            />
          ))}
        </AtomOptGroup>
      );
    } else {
      return <OptionElement key={`${item.value}-${i}`} {...item} />;
    }
  });

  return <AtomSelect>{renderOptions}</AtomSelect>;
};
