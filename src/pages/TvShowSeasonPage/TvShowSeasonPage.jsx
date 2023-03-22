import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../api";

import {
  PageWrap,
  GoBackButton,
  PageHeader,
  PageTitle,
  InfoBlock,
  Cover,
} from "../../globalStyles";
import { SeasonEpisodeList, Episode, EpisodeName } from "./style";

const TvShowSeasonPage = () => {
  const navigate = useNavigate();
  const { id, seasonId } = useParams();

  const [currentSeason, setCurrentSeason] = useState(null);

  const { data: showInfo, error: showInfoError } = api.getTvShowInfo({
    showId: id,
  });

  const { data: showSeasons, error: showSeasonsError } = api.getTvShowSeasons({
    showId: id,
  });

  const { data: seasonsEpisodes, error: SeasonsEpisodesError } =
    api.getTvShowSeasonsEpisodes({
      seasonId,
    });

  useEffect(() => {
    if (showSeasons && seasonId) {
      const seasonData = showSeasons.find(
        (season) => season?.number === Number(seasonId)
      );
      setCurrentSeason(seasonData);
    }
  }, [seasonId, showSeasons]);

  if (SeasonsEpisodesError || showSeasonsError || showInfoError)
    return <>Something went wrong!...please reload a page.</>;

  console.log(currentSeason);

  return (
    <PageWrap>
      <PageHeader>
        <GoBackButton onClick={() => navigate(-1)} />
        <PageTitle>
          {`${showInfo?.name} / Season ${seasonId} (${
            seasonsEpisodes && seasonsEpisodes.length
          } Episodes)`}
        </PageTitle>
      </PageHeader>

      <InfoBlock>
        <Cover url={currentSeason?.image.original} />
        {seasonsEpisodes && (
          <SeasonEpisodeList>
            <div>{`Season premiere date: ${currentSeason?.premiereDate}`}</div>
            {seasonsEpisodes.map((episode) => (
              <div key={episode?.number}>
                <Episode
                  onClick={() =>
                    navigate(
                      `/tv-show/${id}/season/${seasonId}/episode/${episode?.number}`
                    )
                  }
                >
                  {`Episode ${episode?.number}:`}
                  <EpisodeName>{episode?.name}</EpisodeName>
                </Episode>
              </div>
            ))}
          </SeasonEpisodeList>
        )}
      </InfoBlock>
    </PageWrap>
  );
};

export default TvShowSeasonPage;
