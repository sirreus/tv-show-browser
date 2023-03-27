import styled from 'styled-components/macro'

export const EpisodeCover = styled.div`
  position: relative;
  max-width: 992px;
  width: 95vw;
  height: 480px;

  border-radius: 4px;

  background-image: url(${(p) => p.url});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 375px) {
    width: 95vw;
    height: 200px;
    margin: 0 -8px;
    background-size: contain;
    background-position: top;
  }
`

export const Airstamp = styled.div`
  padding: 0 8px 8px;
  font-size: 14;
  color: grey;
`
