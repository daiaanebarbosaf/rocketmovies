import styled from "styled-components";

export const Container = styled.div`
  
  display: flex ;
  align-items: center;
  > svg {
    background: transparent;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;