import { Button, Span, Title, Text } from "../../assets/styles/UI";
import CategoryLinks from "../../components/CategoryLinks";
import Login from "../../components/Login";
import Logo from "../../components/Logo";

import { HiOutlineMenu } from "react-icons/hi";

import {
  CareSectionContainer,
  FooterContainer,
  HeaderContainer,
  HeaderContainerItens,
  HeaderContainerOpenModal,
  HeaderContainerSearch,
  HeaderContainerText,
  HeaderContentItens,
  RatingSectionColumn,
  RatingSectionContainer,
  UseSectionContainer,
  UseSectionStepContainer,
  WhatSectionContainer,
} from "./styles";
import SearchInput from "../../components/SearchInput";
import CardUse from "../../components/CardUse";
import LocationIcon from "../../assets/icons/LocationIcon";
import Choose from "../../assets/icons/Choose";
import Travel from "../../assets/icons/Travel";
import RatingItem from "../../components/RatingItem";
import GrowthIcon from "../../assets/icons/Growth";
import PlayIcon from "../../assets/icons/PlayIcon";
import LockIcon from "../../assets/icons/LockIcon";
import CommentsIcon from "../../assets/icons/CommentsIcon";
import NumberOneIcon from "../../assets/icons/NumberOneIcon";
import StarIcon from "../../assets/icons/StarIcon";

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

          <HeaderContainerOpenModal>
            <HiOutlineMenu />
          </HeaderContainerOpenModal>
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
          <CardUse
            step="Passo 1"
            title="INFORME SUA LOCALIZAÇÃO"
            text="Com a sua localização conseguimos encontrar os profissionais de beleza
        mais próximos de você."
          >
            <LocationIcon />
          </CardUse>

          <CardUse
            step="Passo 2"
            title="ESCOLHA O SERVIÇO DESEJADO E AGENDE UM HORÁRIO"
            text="O Beauty Planner realiza o agendamento, te deixando cada vez mais
          próximo do seu profissional de beleza."
          >
            <Choose />
          </CardUse>

          <CardUse
            step="Passo 3"
            title="PRONTO!"
            text="Basta você se deslocar para o local escolhido na hora agendada e
          cuidar da sua beleza."
          >
            <Travel />
          </CardUse>
        </UseSectionStepContainer>
      </UseSectionContainer>

      <RatingSectionContainer>
        <Title variant="heading2" color="var(--primary)">
          O planejamento da sua beleza é a nossa prioridade
        </Title>
        <RatingSectionColumn>
          <RatingItem
            title="MAIS QUALIDADE"
            text="Encontre os melhores profissionais da sua região com apenas alguns
          cliques."
          >
            <GrowthIcon />
          </RatingItem>

          <RatingItem
            title="AVALIE OS PROFISSIONAIS"
            text="Após o serviço, avalie o profissional com uma nota de acordo com
            o desempenho."
          >
            <StarIcon />
          </RatingItem>

          <RatingItem
            title="VOCÊ COMO PRIORIDADE"
            text="Você é a nossa principal prioridade. Agende seu horário e seja
            atendido na hora marcada!"
          >
            <NumberOneIcon />
          </RatingItem>

          <RatingItem
            title="ADICIONE COMENTÁRIOS"
            text="Comente sobre o desempenhos dos profissionais e leia outras
            avaliações."
          >
            <CommentsIcon />
          </RatingItem>

          <RatingItem
            title="GANHE TEMPO"
            text="Agende os serviços no horário que desejar, sem precisar sair do
            lugar, e com três cliques."
          >
            <PlayIcon />
          </RatingItem>

          <RatingItem
            title="MAIOR SEGURANÇA"
            text="Pode deixar seu dinheiro em casa, e andar tranquilo. Pois tudo
            será cobrado no cartão de crédito!"
          >
            <LockIcon />
          </RatingItem>
        </RatingSectionColumn>
      </RatingSectionContainer>

      <FooterContainer>
        <div>
          <Title variant="heading2Regular" color="var(--gray-light)">
            Cadastre sua conta e comece a usar hoje mesmo!
          </Title>
        </div>
        <Text color="var(--gray-light)">
          Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas,
          dizeres, software, conjunto imagem, layout, aqui veiculados são de
          propriedade exclusiva da Beauty Planner LTDA. É vedada qualquer
          reprodução, total ou parcial, de qualquer elemento de identidade, sem
          expressa autorização. A violação de qualquer direito mencionado
          implicará na responsabilização cível e criminal nos termos da Lei.
          <br />
          <br />
          Copyright © 2022 BEAUTY PLANNER. Todos os direitos reservados.
        </Text>
      </FooterContainer>
    </>
  );
}

export default LandingPage;
