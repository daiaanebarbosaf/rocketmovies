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
    padding: 4.4rem 0;
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

export const Writer = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  margin-top: 0.5rem;

> .writer {
    width: 1rem;
    height: 1rem;

    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.5rem;

    margin-left: 0.5rem;

  }
`;