import styled from 'styled-components';

export const Container = styled.section`
  margin: 5rem 0 2rem;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color:${({ theme }) => theme.COLORS.BACKGROUNG_700};

    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1rem;
    font-weight: 400;
  }
`;