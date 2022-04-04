import styled from "styled-components";

export const SearchInputContainer = styled.label`
  display: flex;
  align-items: center;

  padding: 0.625rem;
  margin-right: 1.7rem;

  background: var(--gray-light);
  border-radius: 8px;

  svg {
    margin-right: 0.625rem;

    color: var(--secondary);
    width: 1.5rem;
    height: 1.5rem;
  }

  input {
    border: none;
    background: transparent;
    width: 24rem;

    color: var(---gray-high);
    font-weight: 500;
    font-size: 0.875rem;
  }
  ::-webkit-input-placeholder {
    font-weight: 500;
    font-size: 0.875rem;

    color: var(---gray-high);
  }
`;
