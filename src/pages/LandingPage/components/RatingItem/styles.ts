import styled from "styled-components";
import {
  ContainerAlign,
  ContainerColumn,
} from "../../../../containers/container";

export const RatingItemContainer = styled(ContainerColumn)`
  gap: 1.25rem;

  @media (max-width: 500px) {
    h1 {
      font-size: 1.875rem;
    }

    p {
      font-size: 0.9rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const RatingItemContent = styled(ContainerAlign)`
  p {
    margin-left: 1.25rem;
  }
`;
