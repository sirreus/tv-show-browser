import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";

import {
  PageWrap,
  PageHeader,
  GoBackButton,
  GoBackButtonIcon,
  PageTitle,
  InfoBlock,
  Cover,
  Alert,
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

  const genres = showInfo?.genres.join(", ");

  return (
    <PageWrap>
      <PageHeader>
        <GoBackButton onClick={() => navigate(routes.main)}>
          <GoBackButtonIcon />
        </GoBackButton>
        <PageTitle>{showInfo?.name}</PageTitle>
      </PageHeader>

      {showInfoError && (
        <Alert>The TV Show data doesn't loaded!...try to reload a page.</Alert>
      )}

      {showInfo && !showInfoError && (
        <InfoBlock>
          <Cover url={showInfo?.image?.original || showInfo?.image?.medium} />
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
      )}
    </PageWrap>
  );
};

export default TvShowPage;
