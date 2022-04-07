import styled from "styled-components";
import {
  ContainerAlign,
  ContainerColumn,
  ContainerJustifyBetween,
} from "../../containers/container";

export const StorePageHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 3.125rem;
`;

export const StorePageDetailsContainer = styled(ContainerJustifyBetween)``;

export const AvatarContainer = styled.div`
  img {
    background-size: cover;
    background-position: top center;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
  }
`;
