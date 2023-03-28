import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 5rem auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 6.4rem 0;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Content = styled.div`
  max-width: 80rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: start;
  }

  > h1 {
    font-weight: 500;
    padding-top: 2rem;
  }

  > p {
    font-size: 1rem;
    margin-top: 1rem;
    text-align: justify;
  }
`;