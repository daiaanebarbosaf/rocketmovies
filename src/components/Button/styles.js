import styled from "styled-components";

export const Container = styled.button`
  width: 25%;
  background-color: ${({ theme }) => theme.COLORS.PINK};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 3rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 10px;

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
