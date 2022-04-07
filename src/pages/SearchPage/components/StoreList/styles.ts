import styled from "styled-components";
import {
  ContainerAlign,
  ContainerColumn,
  ContainerJustifyBetween,
} from "../../../../containers/container";

export const StoreListContainer = styled(ContainerAlign)`
  width: 850px;

  img {
    border-radius: 12px;
    margin: 1.5rem;
  }
`;

export const FooterContainerStoreList = styled(ContainerJustifyBetween)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--black-2);

    svg {
      margin-right: 8px;

      font-size: 1.25rem;
    }
  }

  .rating {
    svg {
      color: var(--yellow);
    }
  }
`;

export const StoreListContent = styled(ContainerColumn)`
  gap: 1rem;

  hr {
    color: var(--gray-medium);
    max-width: 3rem;
  }
`;
