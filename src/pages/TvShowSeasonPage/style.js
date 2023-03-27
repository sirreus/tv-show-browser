import styled from 'styled-components/macro'

export const SeasonEpisodeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 375px) {
    overflow: auto;
    margin: 8px 0;
  }
`

export const SeasonEpisodeList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 16px;
  padding: 8px;

  @media (max-width: 375px) {
    margin: 0;
  }
`

export const BoldText = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  font-weight: 600;
  cursor: ${(p) => (p.onClick ? 'pointer' : 'default')};
`

export const Text = styled.span`
  margin-left: 8px;
  font-weight: 400;
`
