import styled from "styled-components/macro";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  margin: 32px auto;
`;

export const PageHeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: inherit;
`;

export const FavoriteBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  margin: 32px auto;
`;

export const FavoritesList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px 16px;

  max-width: 100%;
  overflow: auto;
  white-space: nowrap;
`;

export const ShowList = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 240px 240px 240px 240px;
  gap: 16px 16px;

  @media (max-width: 1010px) {
    grid-template-columns: repeat(3, 240px);
    gap: 24px 24px;
  }

  @media (max-width: 770px) {
    grid-template-columns: repeat(2, 320px);
    gap: 8px 8px;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 100%);
    gap: 8px 0;
  }
`;
