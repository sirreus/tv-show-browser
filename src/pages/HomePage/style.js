import styled from "styled-components/macro";

export const PageHeaderWrap = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.isMobile ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const FavoriteBlockWrapper = styled.div`
  width: inherit;
`;

export const FavoriteBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  margin: 32px auto;

  @media (max-width: 320px) {
    width: 100%;
    margin: 24px 0;
  }
`;

export const FavoritesList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px 16px;

  max-width: 100%;
  overflow: auto;
  white-space: nowrap;

  @media (max-width: 320px) {
    gap: 0 8px;
  }
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

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 16px 0;
`;

export const ShowMoreButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  background: #d2d2f4;
  border: 1px solid #8181bd;
  padding: 8px;
`;
