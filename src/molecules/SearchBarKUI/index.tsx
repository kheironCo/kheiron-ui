
import { css } from '@emotion/react';
import { AtomSearch, AtomButton, AtomInput, AtomForm } from '../../element';
import { boton, input } from './styles';


export type SearchBarKUIProps = {
  value: string;
  handleChange?: () => void;
  handleSearch?: () => {};
};

export const SearchBarKUI: React.FC<SearchBarKUIProps> = ({ value, handleChange, handleSearch }) => {

  return(
    <AtomSearch className='KUI-search-bar-search KUI-search-bar-root'>
      <AtomForm className='KUI-search-bar-form' handleSearch={handleSearch}>
        <AtomButton className='KUI-search-bar-button' css={css(boton)} type="submit">Search</AtomButton>
        <AtomInput className='KUI-search-bar-input' css={css(input)} onChange={handleChange} value={value} />
      </AtomForm>
    </AtomSearch>
  );
}
  

