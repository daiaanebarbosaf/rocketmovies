import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  width: 100%;
  height: 100vh;


@media (min-width: 1024px){
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

    margin: 1rem 6rem;

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

  .input{
    max-width: 50%;
  }
}

`;

export const AddMovies = styled.div`
  display:  flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 2rem;
  gap: 2rem;

  @media (min-width: 1024px){
    grid-area: addmovies;
    flex-direction: row;
    
    > h2 {
      margin-left: -2rem;
    }

    width: 1100px;
    margin-left: 130px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  
  @media (min-width: 1024px){
    grid-area: content;
  }
`;

export const NewMovie = styled(Link)`

  display: flex;
  align-items: center;
  justify-content: center;
  

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-right: 0.5rem;
  }

  height: 3rem;
  padding: 0 1.6rem;

  border-radius: 10px;

  font-weight: 500;
  
  @media (min-width: 1024px){
    width: 20%;
  }
`;
