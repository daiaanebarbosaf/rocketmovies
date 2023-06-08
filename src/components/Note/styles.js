import styled from "styled-components";

export const Container = styled.button`
  width: 80%;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  border: none;
  border-radius: 10px;

  padding: 1rem;
  margin-bottom: 1rem;

  > h1 {
    flex: 1;

    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 1rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    margin-top: 1em;
    margin-bottom: 2em;
  }

  > footer {
    width: 100%;
    margin-bottom: 0.5rem;
  }

@media (min-width: 1024px){
  width: 100%;

  align-items: flex-start;


  > footer {
    width: 100%;
    display: flex;

    margin-top: 1rem;

    gap: 0.5rem;
  }
}

`;