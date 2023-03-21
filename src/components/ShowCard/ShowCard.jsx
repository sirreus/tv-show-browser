import React from "react";
import { CardImg, CardInfo, CardInfoText, CardTitle, CardWrap } from "./style";

const ShowCard = ({ data }) => {
  console.log(data);

  const genres = data.genres.join(", ");

  return (
    <CardWrap>
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
