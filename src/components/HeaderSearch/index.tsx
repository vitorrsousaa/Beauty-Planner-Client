import { useState } from "react";
import SearchInput from "../SearchInput";
import CategoryLinks from "../CategoryLinks";
import Login from "../Login";
import Logo from "../Logo";

import { HiOutlineMenu } from "react-icons/hi";

import { ContainerAlign, ContainerOpenModal } from "../../containers/container";
import { HeaderSearchContainer } from "./styles";
import SearchModal from "./SearchModal";

function HeaderSearch() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  function handleOpenSearchModal() {
    setSearchModalOpen(true);
  }

  function handleCloseSearchModal() {
    setSearchModalOpen(false);
  }

  return (
    <HeaderSearchContainer>
      <ContainerAlign>
        <Logo />
        <CategoryLinks />
      </ContainerAlign>

      <SearchInput />
      <Login />

      <ContainerOpenModal>
        <HiOutlineMenu onClick={handleOpenSearchModal} />
      </ContainerOpenModal>

      <SearchModal
        isOpen={searchModalOpen}
        onRequestClose={handleCloseSearchModal}
      />
    </HeaderSearchContainer>
  );
}

export default HeaderSearch;
