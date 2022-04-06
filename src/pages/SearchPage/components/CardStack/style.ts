import styled from "styled-components";
import {
  ContainerAlign,
  ContainerJustifyBetween,
} from "../../../../containers/container";

export const CardStackContainer = styled(ContainerJustifyBetween)`
  height: 5rem;
  padding: 2.5rem;
`;

export const CardStackContent = styled(ContainerAlign)`
  svg {
    color: var(--gray-high);

    font-size: 1rem;

    &:first-child {
      font-size: 1.5rem;
      margin-right: 0.75rem;
    }
  }
`;

export const CardStackContainerCity = styled(ContainerAlign)`
  @media (max-width: 600px) {
    *:not(:last-child) {
      display: none;
    }
  }
`;

export const CardStackButton = styled(ContainerAlign)`
  border-radius: 12px;
  border: solid 1px var(--gray-high);

  background: transparent;

  padding: 0.75rem 1.875rem;

  svg {
    color: var(--primary);

    font-size: 1.5rem;

    margin-right: 10px;
  }

  @media (max-width: 600px) {
    p {
      display: none;
    }

    svg {
      margin: 0;
    }
  }
`;
