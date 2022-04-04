import { RatingItemProps } from "./interface";
import { Title, Text } from "../../assets/styles/UI";
import { RatingItemContainer, RatingItemContent } from "./styles";

function RatingItem({ children, title, text }: RatingItemProps) {
  return (
    <RatingItemContainer>
      <Title variant="heading2Regular" color="var(--primary)">
        {title}
      </Title>
      <RatingItemContent>
        {children}
        <Text variant="texting3">{text}</Text>
      </RatingItemContent>
    </RatingItemContainer>
  );
}

export default RatingItem;
