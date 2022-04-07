import { CardUseProps } from "./interface";

import { CardAvatar, Title, Text } from "../../../../assets/styles/UI";
import { CardUserContainer } from "./styles";

function CardUse({ children, step, title, text }: CardUseProps) {
  return (
    <CardUserContainer>
      <CardAvatar size="14rem">{children}</CardAvatar>
      <Title color="var(--primary)" variant="heading3">
        {step}
      </Title>
      <Title color="var(--secondary)" variant="heading4">
        {title}
      </Title>
      <Text variant="texting3">{text}</Text>
    </CardUserContainer>
  );
}

export default CardUse;
