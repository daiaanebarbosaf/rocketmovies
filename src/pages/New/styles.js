import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

`;

export const Form = styled.form`
  width: 100%;

  max-width: 550px;
  margin: 3rem 5rem auto;

  > header {
    display: flex;
    align-items: left;
    flex-direction: column;

    gap: 2rem;
    margin-bottom: 2rem;

    a {
      color:${({ theme }) => theme.COLORS.PINK};
    }
  }
`;