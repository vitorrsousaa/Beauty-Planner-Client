import { StoreListingProps } from "./interface";

import StoreList from "../StoreList";

import { ContainerColumn } from "../../../../containers/container";

function StoreListing({ stores }: StoreListingProps) {
  return (
    <ContainerColumn>
      {stores.map((store) => (
        <StoreList
          title={store.title}
          subtitle={store.subtitle}
          detailsOne={store.detailsOne}
          detailsTwo={store.detailsTwo}
          stars={store.stars}
          comments={store.comments}
        />
      ))}
    </ContainerColumn>
  );
}

export default StoreListing;
