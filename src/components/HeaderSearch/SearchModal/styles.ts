import styled from "styled-components";
import {
  ContainerColumn,
  ContainerJustifyBetween,
} from "../../../containers/container";

export const HeaderSearchModalContainer = styled(ContainerJustifyBetween)`
  width: 100%;

  padding: 0 1.25rem;

  svg {
    color: var(--primary);
    font-size: 1.5rem;

    cursor: pointer;
  }

  button {
    background: transparent;
    border: none;
  }
`;

export const SearchModalSelectionContainer = styled(ContainerColumn)`
  gap: 1rem;
`;
