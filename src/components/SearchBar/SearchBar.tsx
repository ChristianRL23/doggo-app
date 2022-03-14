import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { DogModel } from '../../models';
import './SearchBar.scss';

interface SearchBarProps {
  inputLabel: string;
  inputPlaceholder: string;
  dogData: DogModel[];
}

interface ItemsType {
  id: number;
  name: string;
}

const SearchBar = ({
  inputLabel,
  inputPlaceholder,
  dogData,
}: SearchBarProps) => {
  let items: ItemsType[] = [];
  dogData.forEach((dog) => {
    items.push({ id: dog.id, name: dog.name });
  });
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
