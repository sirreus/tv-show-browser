import styled from "styled-components/macro";

export const PageHeaderWrap = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.isMobile ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 375px) {
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

  @media (max-width: 375px) {
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

  @media (max-width: 375px) {
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
    grid-template-columns: repeat(2, 375px);
    gap: 8px 8px;
  }

  @media (max-width: 375px) {
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

export const Notification = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: ${(p) => (p.isVisible ? "flex" : "none")};
  justify-content: flex-start;
  width: fit-content;
  border-radius: 4px;
  background: ${(p) => (p.status === "added" ? "#bce2da" : "#f3bdbd")};
  border: ${(p) =>
    p.status === "added" ? "1px solid #4b9c8a" : "1px solid #bf4c4c"};
  padding: 8px;

  color: ${(p) => (p.status === "added" ? "#1a3731" : "#712c2c")};

  z-index: 3;

  @media (max-width: 375px) {
    bottom: 16px;
    right: 8px;
    width: 91vw;
  }
`;
