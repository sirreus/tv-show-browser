import React from "react";
import { useNavigate } from "react-router-dom";

import { CardImg, CardInfo, CardInfoText, CardTitle, CardWrap } from "./style";

const ShowCard = ({ data }) => {
  const navigate = useNavigate();

  const genres = data.genres.join(", ");

  return (
    <CardWrap onClick={() => navigate(`/tv-show/${data.id}`)}>
      <CardImg url={data.image.original}>
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
