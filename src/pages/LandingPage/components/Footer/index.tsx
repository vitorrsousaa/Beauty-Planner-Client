import { Title, Text } from "../../../../assets/styles/UI";
import { FooterContainer } from "./styles";

function LandingFooter() {
  return (
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
  );
}

export default LandingFooter;
