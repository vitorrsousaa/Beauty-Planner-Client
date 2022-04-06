import { Title } from "../../assets/styles/UI";
import { ContainerLinks } from "./styles";

function CategoryLinks() {
  return (
    <ContainerLinks>
      <a href="">
        <Title variant="heading4" as="p">
          Salões de beleza
        </Title>
      </a>
      <a href="">
        <Title variant="heading4" as="p">
          Estúdios de tatuagem
        </Title>
      </a>
      <a href="">
        <Title variant="heading4" as="p">
          Barbearias
        </Title>
      </a>
    </ContainerLinks>
  );
}

export default CategoryLinks;
