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
    overflow-y: auto;
    padding: 4.4rem 0;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 0.5rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 80rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .back {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};

  }

  .title {
    margin-top: 2rem;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-self: center;
    gap: 1rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  > button:first-child {
    align-self: start;
  }

  > h1 {
    font-weight: 500;
    padding-top: 2rem;
  }

  > p {
    font-size: 16px;
    margin-top: 1rem;
    text-align: justify;
  }
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 1.2rem;

> .writer {
    display: flex;
    align-items: center;
    
    width: 1rem;
    height: 1rem;

    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.5rem;

    margin-left: 1rem;
  }
`;

export const Tags = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;

  display: flex;
  gap: 0.5rem;
`;

