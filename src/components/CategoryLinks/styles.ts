import styled from "styled-components";

export const ContainerLinks = styled.div`
  a:not(:first-child) {
    margin-left: 1.25rem;
  }

  display: flex;
  align-items: center;

  @media (max-width: 1140px) {
    a * {
      font-size: 1rem;
    }
  }

  @media (max-width: 1040px) {
    display: none;
  }
`;
