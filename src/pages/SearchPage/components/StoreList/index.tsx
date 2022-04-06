import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { Title, Text } from "../../../../assets/styles/UI";
import { StoreProps } from "../../interface/interfaces";

import {
  FooterContainerStoreList,
  StoreListContainer,
  StoreListContent,
  TitleContainerStoreList,
} from "./styles";

function StoreList({
  title,
  subtitle,
  detailsOne,
  detailsTwo,
  stars,
  comments,
}: StoreProps) {
  return (
    <StoreListContainer>
      <img src="https://picsum.photos/seed/picsum/300/200" alt="" />
      <StoreListContent>
        <TitleContainerStoreList>
          <div>
            <Text variant="texting6" color="var(--gray-high)">
              {subtitle}
            </Text>
            <Title variant="heading3" color="var(--black-2)">
              {title}
            </Title>
          </div>
          <AiFillHeart />
        </TitleContainerStoreList>
        <hr />
        <div>
          <Text variant="texting6" color="var(--gray-high)">
            {detailsOne}
          </Text>
          <Text variant="texting6" color="var(--gray-high)">
            {detailsTwo}
          </Text>
        </div>
        <hr />
        <FooterContainerStoreList>
          <div className="rating">
            <AiFillStar />
            <Text variant="texting6" color="var(--black-2)">
              {stars}
            </Text>
          </div>
          <div>
            <BsChatLeft />
            <Text variant="texting6" color="var(--black-2)">
              ({comments} comentários)
            </Text>
          </div>
        </FooterContainerStoreList>
      </StoreListContent>
    </StoreListContainer>
  );
}

export default StoreList;
