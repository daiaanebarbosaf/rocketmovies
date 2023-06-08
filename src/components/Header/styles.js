import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`

  

  @media (max-width: 700px){
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  
  @media (min-width: 720px){
    grid-area: header;
  
    width: 100%;
    height: 105px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

    > h1 {
      font-size: clamp(1rem, 1.3rem, 5vw);
      font-style: normal;
      font-weight: 700;

      color:${({ theme }) => theme.COLORS.PINK};
    }
  }
  


`;

export const Profile = styled(Link)`
  @media (max-width: 700px){

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > img {
    
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 1rem;

    line-height: 1rem;
    margin-left: 16px;
    line-height: 24px;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 0.5rem;
    }
  }

`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;

  margin-bottom: 2rem;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  > h1 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;

    color:${({ theme }) => theme.COLORS.PINK};
  }

  @media (max-width: 700px){
    > h1 {
      font-size: 2.5rem;
      margin-top: 5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  position: absolute;
  top: 68px;
  right: 146px;

  @media (max-width: 700px){
    position: initial;
    top: initial;
    right: initial;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


