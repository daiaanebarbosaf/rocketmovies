import styled from "styled-components";

export const Container = styled.span`
  
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;

  padding: 0.4rem 1rem;
  border-radius: 10px;
  margin-right: 1rem;

  color: ${({ theme }) => theme.COLORS.WHITE_200};
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  
`;
