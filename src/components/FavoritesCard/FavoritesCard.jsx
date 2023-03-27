import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CardWrap, CardImg, FavoriteIcon } from './style'

const FavoriteCard = ({ data, toggleFavorites, isFavorite }) => {
  const navigate = useNavigate()

  return (
    <CardWrap>
      <FavoriteIcon onClick={toggleFavorites} isFavorite={isFavorite} />
      <CardImg url={data.image.medium} onClick={() => navigate(`tv-show/${data.id}`)} />
    </CardWrap>
  )
}

export default FavoriteCard
