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

  > main::-webkit-scrollbar {
    width: 8px;
  }
  
  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  .spacing-between {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;

  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    padding: 1rem;

    border-radius: 8px;

    align-items: center;
  }

  .inputs {
    width: 100%;

    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  width: 100%;

  max-width: 1150px;
  margin: 3rem 5rem auto;

  display: flex;
  align-items: left;

  flex-direction: column;

  .button-save {
    width: 50%;
  }

  .buttons-spacing-between {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

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

export const ButtonDelete = styled.button`
  width: 50%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

  color: ${({ theme }) => theme.COLORS.PINK};

  height: 3rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 10px;

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;