import styled from "styled-components/macro";
import arrowIcon from "./assets/arrow-go-back.svg";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
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
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background: gainsboro;
  }
`;

export const PageTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

export const Cover = styled.div`
  position: relative;
  width: 338px;
  height: 480px;
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
