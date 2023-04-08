import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
 
  grid-template-columns: 20rem auto;
  grid-template-rows: 6rem 8rem auto;

  grid-template-areas: 
  "brand header";
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color:${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;

    color:${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Menu = styled.ul`
    grid-area: menu;
`;

export const AddMovies = styled.div`
    grid-area: addmovies;

    margin-top: 2rem;
    display: flex;
`;

export const Content = styled.div`
    grid-area: content;
    overflow-y: auto;

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

export const NewMovie = styled.button`

  width: 20%;
  background-color: ${({ theme }) => theme.COLORS.PINK};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 3rem;
  border: 0;
  padding: 0 1.6rem;
  
  margin-left: 38rem;

  border-radius: 10px;

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-right: 0.5rem;
  }
`;
