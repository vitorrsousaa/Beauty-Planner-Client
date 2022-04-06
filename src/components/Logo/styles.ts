import styled from "styled-components";
import { ContainerAlign } from "../../containers/container";

export const LogoContainer = styled(ContainerAlign)`
  h1 {
    font: 300 2rem "Comfortaa";
  }

  svg {
    margin-right: 0.625rem;
  }

  span {
    font-weight: 700;
    font-family: "Comfortaa", cursive;
    background: linear-gradient(90deg, #4e54c8 49.74%, #8f94fb 103.14%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 450px) {
    h1 {
      display: none;
    }
  }
`;
