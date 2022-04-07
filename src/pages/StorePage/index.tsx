import HeaderSearch from "../../components/HeaderSearch";

import { AiFillStar } from "react-icons/ai";

import { Avatar, Text, Title } from "../../assets/styles/UI";
import {
  StorePageHeaderContainer,
  StorePageDetailsContainer,
  AvatarContainer,
} from "./styles";

function StorePage() {
  return (
    <section>
      <HeaderSearch />
      <StorePageHeaderContainer>
        <AvatarContainer>
          <img src="https://picsum.photos/200/300" alt="" />
        </AvatarContainer>

        <div>
          <Title variant="heading2">Barbearia rodrigues</Title>
          <StorePageDetailsContainer>
            <div>
              <Text variant="texting6">
                <AiFillStar /> 5.0
              </Text>
              <Text variant="texting6">50 comentários</Text>
              <Text variant="texting6" color="var(--gray-high)">
                Rio de Janeiro
              </Text>
            </div>

            <div>
              <button>Compartilhar</button>
              <button>Salvar</button>
            </div>
          </StorePageDetailsContainer>
        </div>
      </StorePageHeaderContainer>
    </section>
  );
}

export default StorePage;
