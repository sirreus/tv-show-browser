import styled from 'styled-components/macro'

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 240px;
  width: fit-content;
  box-shadow: 0 0 8px #777f87;
  border-radius: 8px;
  margin: 64px auto;
  padding: 16px 32px;

  background: #f5f5fd;

  @media (max-width: 650px) {
    margin: 32px 8px;
    padding: 8px 12px;
  }
`

export const Title = styled.h2`
  margin: 8px 0;
`
export const Text = styled.p``

export const GoHomeButton = styled.div`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #e9e9f9;
  }
`
