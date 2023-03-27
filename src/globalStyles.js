import styled from 'styled-components/macro'
import arrowIcon from './assets/arrow-go-back.svg'

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(p) => (p.isMobile ? '95vw' : '1024px')};
  margin: 32px auto;

  @media (max-width: 375px) {
    width: 95vw;
    padding: 0 8px;
    margin: 16px 0 0 0;
  }
`

export const Logo = styled.div`
  text-align: center;
  font-size: 28px;
  color: #64648e;

  cursor: pointer;
`

export const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
`

export const GoBackButton = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;

  &:hover {
    background-color: rgb(225, 225, 250);
    box-shadow: 0 0 8px rgb(161, 161, 210);
  }
`

export const GoBackButtonIcon = styled.div`
  width: 32px;
  height: 32px;
  margin: 6px 0 0 6px;
  background-image: url(${arrowIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`

export const PageTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;

  @media (max-width: 375px) {
    font-size: 26px;
    margin: 20px 0;
  }
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.vertical ? 'column' : 'row')};
  justify-content: flex-start;
  box-shadow: 0 0 8px #ccc;
  border-radius: 4px;
  background: ghostwhite;
  padding: ${(p) => (p.paddingAside ? `0 ${p.paddingAside}px` : null)};

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    margin: 0 8px;
  }
  @media (max-width: 375px) {
    margin: 0;
    height: 88vh;
  }
`

export const Cover = styled.div`
  position: relative;
  max-width: 992px;
  width: ${(p) => (p.fullSize ? '95vw' : '338px')};
  height: ${(p) => (p.height ? `${p.height}px` : '480px')};
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

  @media (max-width: 375px) {
    width: 95vw;
    height: inherit;
    margin: 0;
    background-size: cover;
    background-position: top;
  }
`

export const InfoBlockTitle = styled.div`
  margin: ${(p) => (p.noMargin ? '0' : '0px 16px')};
  padding: 8px;
  ${(p) => p.fontSize && `font-size: ${p.fontSize}px`};

  @media (max-width: 375px) {
    margin: 0;
  }
`

export const SummaryText = styled.div`
  padding: 8px;
  margin-bottom: 16px;
`

export const Alert = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
  margin: auto;
  border: 1px solid #e15959;
  border-radius: 4px;
  background: #faf2f2;
  color: #712c2c;
`
