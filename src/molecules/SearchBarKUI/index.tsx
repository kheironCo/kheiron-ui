import { AtomSearch,   AtomForm } from '../../element';
import { ButtonStyled, InputStyled } from './styles';
import { ChangeEvent, FormEvent, useState } from 'react';

export type SearchBarKUIProps = {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch?: (e: FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
  getValue?: (value: string) => void;
};

export const SearchBarKUI = ({ handleSearch, getValue, placeholder }: SearchBarKUIProps) => {
  const [_value, _setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(e.target.value);
    _setValue(e.target.value);
  };
  const _onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (handleSearch) handleSearch(e);
  };

  return (
    <AtomSearch className="KUI-search-bar-search KUI-search-bar-root">
      <AtomForm className="KUI-search-bar-form" onSubmit={_onSubmit}>
        <ButtonStyled className="KUI-search-bar-button" type="submit">
          Search
        </ButtonStyled>
        <InputStyled
          className="KUI-search-bar-input"
          onChange={handleChange}
          value={_value}
          placeholder={placeholder}
        />
      </AtomForm>
    </AtomSearch>
  );
};
