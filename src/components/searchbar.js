import { SearchBarBox } from "./styles"

const SearchBar = ({ onSearch }) => (
  <SearchBarBox
    type="text"
    placeholder="BUSCAR FERRAMENTA"
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
