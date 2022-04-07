import styled from "styled-components";
import { ContainerAlign } from "../../containers/container";

export const ContainerLinks = styled(ContainerAlign)`
  a:not(:first-child) {
    margin-left: 1.25rem;
  }

  @media (max-width: 1340px) {
    a * {
      font-size: 1rem;
    }
  }

  @media (max-width: 1230px) {
    a * {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1155px) {
    a * {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 1040px) {
    display: none;
  }
`;
