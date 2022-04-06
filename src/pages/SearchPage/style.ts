import styled from "styled-components";
import { ContainerJustifyBetween } from "../../containers/container";

export const HeaderSearchContainer = styled(ContainerJustifyBetween)`
  border-bottom: solid 1px var(--gray-high);

  padding: 2.5rem;

  @media (max-width: 1040px) {
    label,
    button {
      display: none;
    }
  }
`;

export const HeaderSearchContainerItens = styled.div`
  display: flex;
  align-items: center;

  a p {
    font-size: 1rem;
  }
`;
