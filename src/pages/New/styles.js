import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  main {
    grid-area: content;
    overflow-y: auto;
  }

  .spacing-between {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const Form = styled.form`
  width: 100%;

  max-width: 1150px;
  margin: 3rem 5rem auto;

  display: flex;
  align-items: left;

  flex-direction: column;

  > header {
    display: flex;
    align-items: left;
    flex-direction: column;

    gap: 2rem;
    margin-bottom: 2rem;

    a {
      color:${({ theme }) => theme.COLORS.PINK};

      svg {
        margin-right: 1rem;
      }
    }
  }
`;