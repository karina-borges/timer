import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: calc(100vh - 10rem);
  padding: 2.5rem;
  margin: 5rem;

  background-color: ${({ theme }) => theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    margin: 5rem auto;
    max-width: 74rem;
  }
`;
