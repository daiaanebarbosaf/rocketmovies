import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 8rem auto;
  grid-template-areas:
  "header"
  "addmovies"
  "content"
  ;


  > main {
    max-width: 1137px;

    margin: 30px auto;

    grid-area: content;
    overflow-y: auto;


    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 0.5rem;
    }
  }

  > main::-webkit-scrollbar {
    width: 8px;
  }
  
  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

`;

export const AddMovies = styled.div`
    grid-area: addmovies;

    width: 1130px;
    margin-left: 120px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.div`
    grid-area: content;
    margin-right: 1rem;
`;

export const NewMovie = styled(Link)`
  width: 20%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 3rem;
  padding: 0 1.6rem;

  border-radius: 10px;

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-right: 0.5rem;
  }
`;
