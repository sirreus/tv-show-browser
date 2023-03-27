import styled from 'styled-components/macro'
import favoriteOutline from '../../assets/favorite-outline.svg'
import favoriteFilled from '../../assets/favorite-filled.svg'

export const CardWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 120px;
  box-shadow: 0 0 8px #ccc;
  border-radius: 8px;
  opacity: 0.7;
  cursor: pointer;

  @media (max-width: 650px) {
    width: 100%;
  }

  &:hover {
    opacity: 1;
  }

  &:hover #card-title {
    display: flex;
  }
`

export const CardImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 140px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(p) => p.url});
  padding: 8px;
  border-radius: 8px;
`

const iconChooser = (isFavorite) => {
  return isFavorite ? favoriteFilled : favoriteOutline
}

export const FavoriteIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(p) => iconChooser(p.isFavorite)});
  z-index: 1;
`

export const CardTitle = styled.div`
  display: none;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  padding: 4px;
  background: white;
  color: black;
  opacity: 0.7;
  font-size: 14px;
`
