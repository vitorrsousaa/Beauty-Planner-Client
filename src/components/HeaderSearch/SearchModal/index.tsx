import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import { Button, CardAvatar, Text, Title } from "../../../assets/styles/UI";
import { ContainerJustifyBetween } from "../../../containers/container";
import {
  HeaderSearchModalContainer,
  SearchModalSelectionContainer,
} from "./styles";

interface SearchModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function SearchModal({ isOpen, onRequestClose }: SearchModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="overlayModal"
      className="searchModal"
    >
      <HeaderSearchModalContainer>
        <AiOutlineClose />
        <Title variant="heading4">Filtros</Title>
        <button>
          <Text color="var(--red)">Limpar</Text>
        </button>
      </HeaderSearchModalContainer>

      <SearchModalSelectionContainer>
        <Text variant="texting5">Ordenar por</Text>
        <div>
          <button>Preço</button>
          <button>Preço</button>
          <button>Preço</button>
          <button>Preço</button>
        </div>

        <CardAvatar size="3.125rem" stroke="1px">
          <AiOutlineClose />
        </CardAvatar>
      </SearchModalSelectionContainer>

      <div>
        <Text variant="texting5">Categoria</Text>
        <div>
          {" "}
          <button>Preço</button>
        </div>
      </div>
      <div>
        <Text variant="texting5">Distância</Text>
        <div> colocar tag de distância</div>
      </div>

      <Button variant="blue">Ver Resultados</Button>
    </Modal>
  );
}

export default SearchModal;
