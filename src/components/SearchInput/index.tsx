import { MdGpsNotFixed } from "react-icons/md";
import { SearchInputContainer } from "./styles";

function SearchInput() {
  return (
    <SearchInputContainer>
      <MdGpsNotFixed />
      <input type="text" placeholder="Digite sua cidade ou estado" />
    </SearchInputContainer>
  );
}

export default SearchInput;
