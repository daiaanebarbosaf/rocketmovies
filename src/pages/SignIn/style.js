import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`;

 export const Form = styled.form `
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  text-align: left;


  > h1 {
    font-size: 2rem;
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
    font-size: 1rem;
    color:${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 6rem;
    color:${({ theme }) => theme.COLORS.PINK};

  }

 `;