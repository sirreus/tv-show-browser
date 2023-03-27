import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CardImg, CardInfo, CardInfoText, CardTitle, CardWrap, FavoriteIcon } from './style'

const ShowCard = ({ data, toggleFavorites, isFavorite }) => {
  const navigate = useNavigate()

  const genres = data.genres.join(', ')

  return (
    <CardWrap data-testid="show-card">
      <FavoriteIcon onClick={toggleFavorites} isFavorite={isFavorite} />
      <CardImg
        data-testid={`show-img-${data.id}`}
        url={data.image.medium}
        onClick={() => navigate(`show/${data.id}`)}
      >
        <CardTitle data-testid="show-name">{data.name}</CardTitle>
        <CardInfo data-testid="show-info">
          <CardInfoText>{genres}</CardInfoText>
          <CardInfoText>{`premiered: ${data.premiered}`}</CardInfoText>
          <CardInfoText>{`rating: ${data.rating.average}`}</CardInfoText>
        </CardInfo>
      </CardImg>
    </CardWrap>
  )
}

export default ShowCard
