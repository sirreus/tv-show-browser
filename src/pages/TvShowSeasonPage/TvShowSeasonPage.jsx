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
  InfoBlockTitle,
} from "../../globalStyles";
import { SeasonEpisodeList, BoldText, Text } from "./style";

const TvShowSeasonPage = () => {
  const navigate = useNavigate();
  const { id, seasonNumber } = useParams();

  const [currentSeason, setCurrentSeason] = useState(null);
  // const [seasonsEpisodes, setSeasonsEpisodes] = useState(null);

  const { data: showInfo, error: showInfoError } = api.getTvShowInfo({
    showId: id,
  });

  const { data: showSeasons, error: showSeasonsError } = api.getTvShowSeasons({
    showId: id,
  });

  useEffect(() => {
    if (showSeasons && seasonNumber) {
      const seasonData = showSeasons.find(
        (season) => season?.number === Number(seasonNumber)
      );
      setCurrentSeason(seasonData);
    }
  }, [seasonNumber, showSeasons]);

  const { data: seasonsEpisodes, error: SeasonsEpisodesError } =
    api.getTvShowSeasonsEpisodes({
      seasonId: currentSeason?.id,
    });

  if (showSeasonsError || showInfoError)
    return <>Something went wrong!...please reload a page.</>;

  console.log(currentSeason);

  return (
    <PageWrap>
      <PageHeader>
        <GoBackButton onClick={() => navigate(-1)} />
        <PageTitle>
          {`${showInfo?.name} / Season ${seasonNumber} (${
            seasonsEpisodes && seasonsEpisodes.length
          } Episodes)`}
        </PageTitle>
      </PageHeader>

      <InfoBlock>
        <Cover url={currentSeason?.image?.original} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InfoBlockTitle>
            <BoldText>
              {`Season premiere date:`}
              <Text>{currentSeason?.premiereDate}</Text>
            </BoldText>
          </InfoBlockTitle>
          {seasonsEpisodes && (
            <SeasonEpisodeList>
              {seasonsEpisodes.map((episode) => (
                <div key={episode?.number}>
                  <BoldText
                    onClick={() =>
                      navigate(
                        `/tv-show/${id}/season/${seasonNumber}/episode/${episode?.number}`
                      )
                    }
                  >
                    {`Episode ${episode?.number}:`}
                    <Text>{episode?.name}</Text>
                  </BoldText>
                </div>
              ))}
            </SeasonEpisodeList>
          )}
        </div>
      </InfoBlock>
    </PageWrap>
  );
};

export default TvShowSeasonPage;
