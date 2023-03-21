import styled from "styled-components/macro";

export const ShowListWrap = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 320px 320px 320px;
  gap: 16px 16px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 320px);
    gap: 24px 24px;
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 320px);
    gap: 8px 8px;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 100%);
    gap: 8px 0;
  }
`;
