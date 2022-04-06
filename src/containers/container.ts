import styled from "styled-components";

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerJustifyBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerAlign = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerOpenModal = styled.div`
  display: none;

  @media (max-width: 1040px) {
    display: flex;

    svg {
      width: 1.5rem;
      height: 1.5rem;

      color: var(--primary);

      cursor: pointer;
    }
  }
`;
