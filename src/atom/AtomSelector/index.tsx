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

const OptionElement: React.FC<OptionType> = ({ value, option }) => (
  <AtomOption value={value}>{option}</AtomOption>
);

const OptGroupElement: React.FC<OptGroupType> = ({ optGroup, optionList }) => (
  <AtomOptGroup label={optGroup}>
    {optionList.map((element, j) => (
      <OptionElement key={element.value + j} {...element} />
    ))}
  </AtomOptGroup>
);

export const AtomSelector = ({ list }: AtomSelectorProps) => (
  <AtomSelect>
    {list.map((item, i) =>
      'optGroup' in item ? (
        <OptGroupElement key={item.optGroup + i} {...item} />
      ) : (
        <OptionElement key={item.value + i} {...item} />
      )
    )}
  </AtomSelect>
);
