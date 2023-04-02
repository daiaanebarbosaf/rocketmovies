import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 20rem auto;
  grid-template-rows: 6rem 20rem auto 64px;

  grid-template-areas: 
  "brand header"
  "menu content"
 ;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
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

export const Search = styled.div`
    grid-area: search;
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 2rem;
    overflow-y: auto;

`;

export const NewMovie = styled.button`

  width: 20%;
  background-color: ${({ theme }) => theme.COLORS.PINK};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 3rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 10px;

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-right: 0.5rem;
  }
`;
