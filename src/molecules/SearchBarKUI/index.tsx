import { AtomSearch, AtomButton, AtomInput, AtomForm } from '../../element';
import { button, input } from './styles';
import { ChangeEvent, FormEvent, useState } from 'react';


export type SearchBarKUIProps = {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch?: (e: FormEvent<HTMLFormElement>) => void;
  getValue?: (value: string) => void;
};

export const SearchBarKUI = ({ handleSearch, getValue }: SearchBarKUIProps) => {

  const [_value, _setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (getValue) getValue(e.target.value);
    _setValue(e.target.value);
  };
  const _onSubmit = (e: FormEvent<HTMLFormElement>)=>{
    // si existe la función se ejecutará
    if(handleSearch) handleSearch(e);
  }

  return(
    <AtomSearch className='KUI-search-bar-search KUI-search-bar-root'>
      <AtomForm className='KUI-search-bar-form' onSubmit={_onSubmit}>
        <AtomButton className='KUI-search-bar-button' css={button} type="submit">Search</AtomButton>
        <AtomInput className='KUI-search-bar-input' css={input} onChange={handleChange} value={_value} />
      </AtomForm>
    </AtomSearch>
  );
}
  

