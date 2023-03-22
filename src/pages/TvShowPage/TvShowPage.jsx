import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import {
  PageWrap,
  ShowCover,
  ShowDetails,
  ShowInfo,
  ShowTitle,
  ShowDetailsText,
  ShowSeasonLink,
  ShowSeasonList,
  GoBackButton,
  PageHeader,
} from "./style";

const TvShowPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: showInfo, error: showInfoError } = api.getTvShowInfo({
    showId: id,
  });
  const { data: showSeasons, error: showSeasonsError } = api.getTvShowSeasons({
    showId: id,
  });

  if (showInfoError) return <>Something went wrong!...please reload a page.</>;

  console.log(showInfo);
  console.log(showSeasons);

  const genres = showInfo?.genres.join(", ");

  return (
    <PageWrap>
      <PageHeader>
        <GoBackButton onClick={() => navigate("/")} />
        <ShowTitle>{showInfo?.name}</ShowTitle>
      </PageHeader>

      <ShowInfo>
        <ShowCover url={showInfo?.image.original} />
        <ShowDetails>
          <ShowDetailsText>{genres}</ShowDetailsText>
          <ShowDetailsText>{`premiered: ${showInfo?.premiered}`}</ShowDetailsText>
          <ShowDetailsText>{`rating: ${showInfo?.rating.average}`}</ShowDetailsText>
          {showSeasons && (
            <ShowSeasonList>
              {showSeasons.map((season) => (
                <ShowSeasonLink onClick={() => navigate()} key={season.id}>
                  {`Season ${season?.number}`}
                </ShowSeasonLink>
              ))}
            </ShowSeasonList>
          )}
        </ShowDetails>
      </ShowInfo>
    </PageWrap>
  );
};

export default TvShowPage;
