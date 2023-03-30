import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 105px 128px auto 64px;

  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newmovie content";

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
    font-size: 2rem;
    color:${({ theme }) => theme.COLORS.PINK};
  }

`;
export const Menu  = styled.ul`
    grid-area: menu;
    background: green;
`;
export const Search = styled.div`
    grid-area: search;
    background: violet;
`;
export const Content = styled.div`
    grid-area: content;
    background: blue;
`;
export const NewMovie= styled.button`
    grid-area: newmovie;
    background: yellow;
`;