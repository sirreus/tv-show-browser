import styled from "styled-components/macro";
import arrowIcon from "../../assets/arrow-go-back.svg";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 32px auto;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
`;

export const GoBackButton = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 16px;
  background-image: url(${arrowIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ShowInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0 8px #ccc;
  border-radius: 4px;
  background: whitesmoke;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    margin: 0 8px;
  }
`;

export const ShowTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
`;

export const ShowCover = styled.div`
  position: relative;
  width: 360px;
  height: 520px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(p) => p.url});
  border-radius: 4px;

  @media (max-width: 800px) {
    background-position: center;
    align-self: center;
    margin: 8px 0;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 452px;
  }
`;

export const ShowDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 16px;
  padding: 8px;

  @media (max-width: 450px) {
    width: fit-content;
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
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: grey;
  }

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;
