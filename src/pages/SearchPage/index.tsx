import CategoryLinks from "../../components/CategoryLinks";
import Logo from "../../components/Logo";
import { HeaderSearchContainer, HeaderSearchContainerItens } from "./style";

function SearchPage() {
  return (
    <>
      <HeaderSearchContainer>
        <HeaderSearchContainerItens>
          <Logo />
          <CategoryLinks />
        </HeaderSearchContainerItens>
      </HeaderSearchContainer>
    </>
  );
}

export default SearchPage;
