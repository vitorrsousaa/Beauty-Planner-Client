import { Title } from "../../assets/styles/UI";
import { ContainerLinks } from "./styles";

function CategoryLinks() {
  return (
    <ContainerLinks>
      <a href="">
        <Title variant="heading4">Salões de beleza</Title>
      </a>
      <a href="">
        <Title variant="heading4">Estúdios de tatuagem</Title>
      </a>
      <a href="">
        <Title variant="heading4">Barbearias</Title>
      </a>
    </ContainerLinks>
  );
}

export default CategoryLinks;
