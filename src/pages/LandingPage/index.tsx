import CategoryLinks from "../../components/CategoryLinks";
import Login from "../../components/Login";
import Logo from "../../components/Logo";
import CardListing from "./components/CardListing";
import RatingSection from "./components/RatingSection";
import SearchInput from "../../components/SearchInput";
import LandingFooter from "./components/Footer";

import { HiOutlineMenu } from "react-icons/hi";

import {
  CareSectionContainer,
  HeaderContainer,
  HeaderContainerItens,
  HeaderContainerSearch,
  HeaderContainerText,
  HeaderContentItens,
  RatingSectionContainer,
  UseSectionContainer,
  UseSectionStepContainer,
  WhatSectionContainer,
} from "./styles";
import { ContainerOpenModal } from "../../containers/container";
import { Button, Span, Title, Text } from "../../assets/styles/UI";

function LandingPage() {
  return (
    <>
      <HeaderContainer>
        <HeaderContainerItens>
          <HeaderContentItens>
            <Logo variant="full" />

            <CategoryLinks />
          </HeaderContentItens>

          <Login />

          <ContainerOpenModal>
            <HiOutlineMenu />
          </ContainerOpenModal>
        </HeaderContainerItens>

        <HeaderContainerText>
          <Title variant="heading2Regular">
            Agende um horário com os{" "}
            <Span color="#234771" size="36px">
              melhores profissionais
            </Span>{" "}
            da região com apenas três cliques
          </Title>
        </HeaderContainerText>

        <HeaderContainerSearch>
          <SearchInput />
          <Button variant="blue">Ver locais mais próximos</Button>
        </HeaderContainerSearch>
      </HeaderContainer>

      <WhatSectionContainer>
        <Title variant="heading1">O que é o Beauty Planner ?</Title>

        <Text variant="texting3">
          Nunca mais deixe de realizar seu atendimento de beleza por causa de
          filas e processos desnecessários.
        </Text>

        <Text variant="texting3">
          Tenha o seu profissional de beleza cada vez mais próximo de você com
          apenas três passos simples.
        </Text>

        <Text variant="texting3">
          Ganhe agilidades e flexibilidade no momento de se cuidar.
        </Text>
      </WhatSectionContainer>
      <CareSectionContainer>
        <Title variant="heading1" color="var(--white)">
          Cuidar de você nunca foi tão mais fácil!
        </Title>
        <Text variant="texting1" color="var(--white)">
          Agende hoje mesmo seu horário.
        </Text>
      </CareSectionContainer>

      <UseSectionContainer>
        <Title variant="heading2">
          Veja como é simples utilizar o Beauty Planner
        </Title>

        <Text variant="texting2">Você precisa de apenas três passos!</Text>

        <UseSectionStepContainer>
          <CardListing />
        </UseSectionStepContainer>
      </UseSectionContainer>

      <RatingSectionContainer>
        <Title variant="heading2" color="var(--primary)">
          O planejamento da sua beleza é a nossa prioridade
        </Title>
        <RatingSection />
      </RatingSectionContainer>

      <LandingFooter />
    </>
  );
}

export default LandingPage;
