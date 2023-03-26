import styled from "styled-components/macro";

export const ShowDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 16px;
  padding: 8px;

  @media (max-width: 450px) {
    width: fit-content;
    margin: 0;
  }
`;

export const ShowDetailsText = styled.div`
  margin: 4px 0;
`;

export const ShowSeasonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;
  margin: 8px 0;
`;

export const ShowSeasonLink = styled.div`
  width: fit-content;
  padding: 4px 8px;
  border: 0.5px solid grey;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: lavender;
    border: 0.6px solid lavender;
  }

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;
