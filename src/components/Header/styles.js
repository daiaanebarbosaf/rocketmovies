import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: flex-end;

  padding: 0 4rem;
`;

export const Profile = styled.div`

  width: 100%;
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