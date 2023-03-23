import moment from "moment";
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
  SummaryText,
} from "../../globalStyles";
import { Airstamp } from "./style";

const TvShowEpisodePage = () => {
  const navigate = useNavigate();
  const { id, seasonNumber, episodeNumber } = useParams();

  const [seasonId, setSeasonId] = useState(null);
  const [episodeData, setEpisodeData] = useState(null);

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

      setSeasonId(seasonData?.id);
    }
  }, [seasonNumber, showSeasons]);

  const { data: seasonsEpisodes, error: SeasonsEpisodesError } =
    api.getTvShowSeasonsEpisodes({
      seasonId,
    });

  useEffect(() => {
    if (seasonsEpisodes && episodeNumber) {
      const episodeData = seasonsEpisodes.find(
        (episodes) => episodes?.number === Number(episodeNumber)
      );

      setEpisodeData(episodeData);
    }
  }, [seasonsEpisodes, episodeNumber]);

  const getSummaryText = () => {
    return episodeData?.summary.split("<p>")[1].split("</p>")[0];
  };

  const formatDate = (date) => {
    return moment(date).format("YYYY MMMM Do HH:mm");
  };

  return (
    <PageWrap>
      <PageHeader>
        <GoBackButton onClick={() => navigate(-1)} />
        <PageTitle>{`${showInfo?.name} / Season ${seasonNumber} / Episode ${episodeNumber}`}</PageTitle>
      </PageHeader>

      <InfoBlock vertical paddingAside={16}>
        <InfoBlockTitle noMargin fontSize={24}>
          {episodeData?.name}
        </InfoBlockTitle>
        <Airstamp>{formatDate(episodeData?.airstamp)}</Airstamp>
        <Cover url={episodeData?.image.original} fullSize height={432} />
        <SummaryText>{getSummaryText()}</SummaryText>
      </InfoBlock>
    </PageWrap>
  );
};

export default TvShowEpisodePage;
