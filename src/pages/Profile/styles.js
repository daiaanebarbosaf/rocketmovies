import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.PINK_100};

    padding: 0 124px;

    > a {
      color: ${({ theme }) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    @media (max-width: 924px){
      padding: 0;
      margin-bottom: 5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      > a {
        margin-bottom: 3rem;
      }

    }

  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4){
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;

  margin: -124px auto 32px;

  width: 186px;
  height: 186px;
  
  > img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    > input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;