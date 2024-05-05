
import { css } from '@emotion/react';
import { AtomSearch, AtomButton, AtomInput, AtomForm } from '../../element';
import { button, input } from './styles';
import { ChangeEvent, FormEvent } from 'react';


export type SearchBarKUIProps = {
  value: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch?: (e: FormEvent<HTMLFormElement>) => void;
};

export const SearchBarKUI = ({ value, handleChange, handleSearch }: SearchBarKUIProps) => {

  return(
    <AtomSearch className='KUI-search-bar-search KUI-search-bar-root'>
      <AtomForm className='KUI-search-bar-form' onSubmit={handleSearch}>
        <AtomButton className='KUI-search-bar-button' css={button} type="submit">Search</AtomButton>
        <AtomInput className='KUI-search-bar-input' css={input} onChange={handleChange} value={value} />
      </AtomForm>
    </AtomSearch>
  );
}
  

