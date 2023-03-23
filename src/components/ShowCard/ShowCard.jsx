import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CardImg,
  CardInfo,
  CardInfoText,
  CardTitle,
  CardWrap,
  FavoriteIcon,
} from "./style";

const ShowCard = ({ data, toggleFavorites, isFavorite }) => {
  const navigate = useNavigate();

  const genres = data.genres.join(", ");

  return (
    <CardWrap>
      <FavoriteIcon onClick={toggleFavorites} isFavorite={isFavorite} />
      <CardImg
        url={data.image.original}
        onClick={() => navigate(`/tv-show/${data.id}`)}
      >
        <CardTitle>{data.name}</CardTitle>
        <CardInfo>
          <CardInfoText>{genres}</CardInfoText>
          <CardInfoText>{`premiered: ${data.premiered}`}</CardInfoText>
          <CardInfoText>{`rating: ${data.rating.average}`}</CardInfoText>
        </CardInfo>
      </CardImg>
    </CardWrap>
  );
};

export default ShowCard;
