import { MdGpsNotFixed } from "react-icons/md";
import { SearchInputContainer } from "./styles";

function SearchInput() {
  return (
    <SearchInputContainer as="label">
      <MdGpsNotFixed />
      <input type="text" placeholder="Digite sua cidade ou estado" />
    </SearchInputContainer>
  );
}

export default SearchInput;
