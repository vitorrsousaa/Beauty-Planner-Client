import { MdFilterList, MdArrowForwardIos } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";

import { Text } from "../../../../assets/styles/UI";
import {
  CardStackButton,
  CardStackContainer,
  CardStackContainerCity,
  CardStackContent,
} from "./style";

function CardStack() {
  return (
    <CardStackContainer>
      <CardStackContent>
        <RiHome2Line />

        <CardStackContainerCity>
          <Text variant="texting5" color="var(--gray-high)">
            Home
          </Text>
          <MdArrowForwardIos />
          <Text variant="texting5" color="var(--gray-high)">
            Busca
          </Text>
          <MdArrowForwardIos />
          <Text variant="texting5" color="var(--primary)">
            Rio de Janeiro
          </Text>
        </CardStackContainerCity>
      </CardStackContent>

      <CardStackButton as="button">
        <MdFilterList />
        <Text variant="texting5">Filtros</Text>
      </CardStackButton>
    </CardStackContainer>
  );
}

export default CardStack;
