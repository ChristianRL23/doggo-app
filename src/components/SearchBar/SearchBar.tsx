import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './SearchBar.scss';

interface SearchBarProps {
  inputLabel: string;
  inputPlaceholder: string;
}

const SearchBar = ({ inputLabel, inputPlaceholder }: SearchBarProps) => {
  const items = [{ id: 1, name: 'TypeScript' }];
  const searchBarStyles = {
    borderRadius: '5px',
    fontFamily: 'Work Sans',
  };

  return (
    <form className="search-bar">
      <label>{inputLabel}</label>
      <ReactSearchAutocomplete
        placeholder={inputPlaceholder}
        styling={searchBarStyles}
        items={items}
      />
    </form>
  );
};

export default SearchBar;
