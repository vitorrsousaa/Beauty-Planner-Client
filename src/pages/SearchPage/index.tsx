import CategoryLinks from "../../components/CategoryLinks";
import Login from "../../components/Login";
import Logo from "../../components/Logo";
import SearchInput from "../../components/SearchInput";
import { ContainerOpenModal } from "../../containers/container";
import { HeaderSearchContainer, HeaderSearchContainerItens } from "./style";
import { HiOutlineMenu } from "react-icons/hi";
import CardStack from "./components/CardStack";

import StoreListing from "./components/StoreListing";
import StoreViewer from "./components/StoreViewer";

function SearchPage() {
  const stores = [
    {
      title: "Barbearia Rodrigues",
      subtitle: "Barbearia em Copacabana",
      detailsOne: "Barba, cabelo e experiências",
      detailsTwo: "Aquele tapa no visual com as melhores cervejas",
      stars: 5.0,
      comments: 102,
    },
    {
      title: "Scrimas Tattoo",
      subtitle: "Estúdio de tatuagem em Copacabana",
      detailsOne: "Tatuagem e piercing",
      detailsTwo: "Faça sua arte desejada com os melhores",
      stars: 4.5,
      comments: 10,
    },
  ];
  return (
    <>
      <HeaderSearchContainer>
        <HeaderSearchContainerItens>
          <Logo />
          <CategoryLinks />
        </HeaderSearchContainerItens>

        <SearchInput />
        <Login />

        <ContainerOpenModal>
          <HiOutlineMenu />
        </ContainerOpenModal>
      </HeaderSearchContainer>

      <CardStack />

      <StoreViewer>
        <>
          <StoreListing stores={stores} />
          <img src="https://picsum.photos/seed/picsum/300/200" alt="" />
        </>
      </StoreViewer>
    </>
  );
}

export default SearchPage;
