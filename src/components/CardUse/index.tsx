import { ReactElement } from "react";
import { Avatar, Title, Text } from "../../assets/styles/UI";
import { CardUseProps } from "./interface";
import { CardUserContainer } from "./styles";

function CardUse({ children, step, title, text }: CardUseProps) {
  return (
    <CardUserContainer>
      <Avatar size="14rem">{children}</Avatar>
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
