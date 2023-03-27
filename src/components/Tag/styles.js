import styled from "styled-components";

export const Contaner = styled.span`
  font-size: 1.2rem;

  padding: 2rem 7rem;
  border-radius: 5px;
  margin-right: 3rem;

  color: ${({ theme }) => theme.COLORS.BACKGRUND_900};
  background-color: ${({ theme }) => theme.COLORS.PINK};
  
`;
