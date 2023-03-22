import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";

import {
  PageWrap,
  PageHeader,
  GoBackButton,
  PageTitle,
  InfoBlock,
  Cover,
} from "../../globalStyles";
import {
  ShowDetails,
  ShowDetailsText,
  ShowSeasonLink,
  ShowSeasonList,
} from "./style";

import routes from "../../routes";

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
        <GoBackButton onClick={() => navigate(routes.main)} />
        <PageTitle>{showInfo?.name}</PageTitle>
      </PageHeader>

      <InfoBlock>
        <Cover url={showInfo?.image.original} />
        <ShowDetails>
          <ShowDetailsText>{genres}</ShowDetailsText>
          <ShowDetailsText>{`premiered: ${showInfo?.premiered}`}</ShowDetailsText>
          <ShowDetailsText>{`rating: ${showInfo?.rating.average}`}</ShowDetailsText>
          {showSeasonsError && <>The list of seasons not loaded</>}
          {showSeasons && !showSeasonsError && (
            <ShowSeasonList>
              {showSeasons.map((season) => (
                <ShowSeasonLink
                  onClick={() =>
                    navigate(`/tv-show/${id}/season/${season.number}`)
                  }
                  key={season.id}
                >
                  {`Season ${season?.number}`}
                </ShowSeasonLink>
              ))}
            </ShowSeasonList>
          )}
        </ShowDetails>
      </InfoBlock>
    </PageWrap>
  );
};

export default TvShowPage;
