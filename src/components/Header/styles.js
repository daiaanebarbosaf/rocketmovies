import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 5rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: flex-end;

  padding: 0 4rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  

  > img {
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-right: 1rem;
    line-height: 1rem;

    span {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.5rem;

    margin-left: 1rem;

  }
`;