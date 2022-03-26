import { useContext } from 'react';
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
