import styled from "styled-components/macro";

export const SeasonEpisodeList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 16px;
  padding: 8px;
`;

export const Episode = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  font-weight: 600;
  cursor: pointer;
`;

export const EpisodeName = styled.span`
  margin-left: 8px;
  font-weight: 400;
`;
