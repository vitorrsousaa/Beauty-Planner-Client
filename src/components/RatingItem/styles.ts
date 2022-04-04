import styled from "styled-components";

export const RatingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 500px) {
    h1 {
      font-size: 1.875rem;
    }

    p {
      font-size: 0.9rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const RatingItemContent = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 1.25rem;
  }
`;
