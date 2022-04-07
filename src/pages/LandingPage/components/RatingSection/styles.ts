import styled from "styled-components";

export const RatingSectionColumn = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
