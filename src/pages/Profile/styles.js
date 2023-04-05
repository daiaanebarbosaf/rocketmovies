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
      x
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 0.5rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;

`;

export const Avatar = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  
  > img {
    width: 186px;
    height: 186px;


    border-radius: 50%;
  }
`;