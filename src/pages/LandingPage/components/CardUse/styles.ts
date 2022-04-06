import styled from "styled-components";
import { ContainerColumn } from "../../../../containers/container";

export const CardUserContainer = styled(ContainerColumn)`
  justify-content: center;
  align-items: center;

  max-width: 300px;

  h1 {
    margin: 1rem 0;
  }

  p {
    text-align: center;
  }
`;
