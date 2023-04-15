import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  border: none;
  border-radius: 10px;

  padding: 1rem;
  margin-bottom: 1rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 1rem;
  }

  > p {
    text-align: left;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    margin-top: 1em;
    margin-bottom: 2em;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1rem;

    gap: 0.5rem;
  }
`;