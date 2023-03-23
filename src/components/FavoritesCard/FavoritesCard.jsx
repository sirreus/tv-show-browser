import React from "react";
import { useNavigate } from "react-router-dom";

import { CardWrap, CardImg, FavoriteIcon, CardTitle } from "./style";

const FavoriteCard = ({ data, toggleFavorites, isFavorite }) => {
  const navigate = useNavigate();

  return (
    <CardWrap>
      <FavoriteIcon onClick={toggleFavorites} isFavorite={isFavorite} />
      <CardImg
        url={data.image.original}
        onClick={() => navigate(`/tv-show/${data.id}`)}
      >
        <CardTitle>{data.name}</CardTitle>
      </CardImg>
    </CardWrap>
  );
};

export default FavoriteCard;
