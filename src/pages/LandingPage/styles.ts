import styled from "styled-components";
import {
  ContainerColumn,
  ContainerJustifyBetween,
} from "../../containers/container";

export const HeaderContainer = styled(ContainerColumn)`
  padding: 2.5rem;

  background: var(--light);
`;

export const HeaderContainerItens = styled(ContainerJustifyBetween)`
  padding: 2.5rem 0;

  @media (max-width: 1040px) {
    div:nth-child(2) {
      display: none;
    }
  }
`;

export const HeaderContainerOpenModal = styled.div`
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

export const HeaderContentItens = styled.div`
  display: flex;
  align-items: center;

  div + div {
    margin-left: 5.625rem;
  }

  @media (max-width: 1230px) {
    div + div {
      margin-left: 1.8rem;
    }
  } ;
`;

export const HeaderContainerText = styled.div`
  margin: 5.625rem 0;
  max-width: 46rem;

  span {
    font-weight: 700;
    color: #234771;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const HeaderContainerSearch = styled.div`
  display: flex;

  margin-bottom: 6rem;

  @media (max-width: 650px) {
    flex-direction: column;

    gap: 2rem;

    input {
      font-size: 0.75rem;
      width: 100%;
    }

    label {
      margin: 00;
    }
  }

  @media (max-width: 800px) {
    input {
      width: 16rem;
    }
  }
`;

export const WhatSectionContainer = styled.section`
  padding: 7.75rem 2.5rem;

  p {
    max-width: 38rem;
  }

  p + p {
    margin-top: 1.5rem;
  }

  h1 {
    margin-bottom: 2.5rem;
  }
`;

export const CareSectionContainer = styled.section`
  background: linear-gradient(180deg, #4e54c8 0%, #8f94fb 100%);

  padding: 4.375rem 2.5rem;

  @media (max-width: 600px) {
    p:last-child {
      margin-top: 2rem;
    }
  }
`;

export const UseSectionStepContainer = styled(ContainerJustifyBetween)`
  text-align: center;

  padding: 1.875rem 0;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

export const UseSectionContainer = styled(ContainerColumn)`
  padding: 6.25rem 2.5rem;

  h1 {
    margin-bottom: 1.875rem;
  }

  p {
    margin-bottom: 1.875rem;
  }
`;

export const RatingSectionContainer = styled(ContainerColumn)`
  background: #e7ecef;

  padding: 2.5rem;
  align-items: center;

  gap: 3rem;
`;

export const RatingSectionColumn = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterContainer = styled.footer`
  background: var(--primary);

  padding: 0 2.5rem;

  font-family: "Comfortaa", cursive;
  text-align: center;

  div {
    padding: 5.375rem 0 1.875rem 0;
    margin-bottom: 3.75rem;

    border-bottom: 2px solid #8b8c89;
  }

  h1 {
    font-family: "Comfortaa", cursive;
  }

  p {
    padding-bottom: 5.375rem;
    font-family: "Comfortaa", cursive;
  }
`;
