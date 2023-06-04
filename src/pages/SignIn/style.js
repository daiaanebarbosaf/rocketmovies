import styled from "styled-components";
import backgroundImg from '../../assets/bg.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px){
    height: 100vh;

    display: flex;
    align-items: stretch;
  }

`;

 export const Form = styled.form `
  
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    
    > h1 {
      font-size: 2.7rem;
      font-style: normal;
      font-weight: 700;

      color:${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    > p {
      font-size: 0.8rem;
      color:${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
     
      margin-top: 2rem;
      margin-left: 7rem;
      color:${({ theme }) => theme.COLORS.PINK};
      
    }

  @media (min-width: 1024px){
    padding: 0 136px;
    align-items: left;

    text-align: left;
  }
 `;

export const Background = styled.div`
  @media (min-width: 1024px){
    flex: 1;
    background: url(${backgroundImg})
    no-repeat center center;

    background-size: cover;
  }

`;