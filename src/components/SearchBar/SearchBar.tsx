import { useContext, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import ModalContext from '../../context/modalContext';
import './SearchBar.scss';

interface SearchBarProps {
  inputLabel: string;
  inputPlaceholder: string;
}

interface ItemsType {
  id: number;
  name: string;
}

const SearchBar = ({ inputLabel, inputPlaceholder }: SearchBarProps) => {
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const modalCtx = useContext(ModalContext);

  let items: ItemsType[] = [];
  modalCtx.dogData.forEach((dog) => {
    items.push({ id: dog.id, name: dog.name });
  });
  const searchBarStyles = {
    borderRadius: '5px',
    fontFamily: 'Work Sans',
    zIndex: 100,
  };

  const selectResult = (result: ItemsType) => {
    modalCtx.selectBreed(result.name);
    setSearchBarValue('');
  };

  const handleOnSearch = (value: string) => {
    setSearchBarValue(value);
  };

  return (
    <form
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="search-bar"
    >
      <label>{inputLabel}</label>
      <ReactSearchAutocomplete
        onSearch={handleOnSearch}
        inputSearchString={searchBarValue}
        placeholder={inputPlaceholder}
        styling={searchBarStyles}
        items={items}
        onSelect={selectResult}
      />
    </form>
  );
};

export default SearchBar;
