import React from 'react'

import { CardWrap, CardImg, FavoriteIcon } from './style'

const FavoriteCard = ({ data, toggleFavorites, isFavorite }) => {
  return (
    <CardWrap>
      <FavoriteIcon onClick={toggleFavorites} isFavorite={isFavorite} />
      <CardImg href={`tv-show/${data.id}`} url={data.image.medium} />
    </CardWrap>
  )
}

export default FavoriteCard
