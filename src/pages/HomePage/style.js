import styled from "styled-components/macro";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 32px auto;
`;

export const ShowListWrap = styled.div`
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
