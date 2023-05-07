import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  > h1 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;

    color:${({ theme }) => theme.COLORS.PINK};
  }

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > img {
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 1rem;

    line-height: 1rem;
    margin-left: 16px;
    line-height: 24px;

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;

    color:${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  position: absolute;
  top: 68px;
  right: 146px
`;


