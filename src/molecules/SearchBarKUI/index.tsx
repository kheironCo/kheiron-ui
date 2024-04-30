
import { AtomSearch, AtomButton, AtomInput, AtomForm } from '../../element';

export type SearchBarKUIProps = {
  value: string;
  handleChange?: () => void;
  handleSearch?: () => {};
};

export const SearchBarKUI: React.FC<SearchBarKUIProps> = ({ value, handleChange, handleSearch }) => {

  return(
    <AtomSearch className='KUI-search-bar-search KUI-search-bar-root'>
      <AtomForm className='KUI-search-bar-form' handleSearch={handleSearch}>
        <AtomButton className='KUI-search-bar-button' type="submit">Search</AtomButton>
        <AtomInput className='KUI-search-bar-input' onChange={handleChange} value={value} />
      </AtomForm>
    </AtomSearch>
  );
}
  

