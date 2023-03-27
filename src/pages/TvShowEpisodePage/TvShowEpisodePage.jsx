import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'

import api from '../../api'
import { useMedia } from '../../hooks/media'

import {
  PageWrap,
  GoBackButton,
  GoBackButtonIcon,
  PageHeader,
  PageTitle,
  InfoBlock,
  InfoBlockTitle,
  SummaryText,
  Alert,
  Logo,
} from '../../globalStyles'
import { Airstamp, EpisodeCover } from './style'

const TvShowEpisodePage = () => {
  const navigate = useNavigate()
  const isMobile = useMedia()
  const { id, seasonNumber, episodeNumber } = useParams()

  const [seasonId, setSeasonId] = useState(null)
  const [episodeData, setEpisodeData] = useState(null)

  const { data: showInfo } = api.getTvShowInfo({
    showId: id,
  })

  const { data: showSeasons, error: showSeasonsError } = api.getTvShowSeasons({
    showId: id,
  })

  useEffect(() => {
    if (showSeasons && seasonNumber) {
      const seasonData = showSeasons.find(
        (season) => season?.number === Number(seasonNumber)
      )

      setSeasonId(seasonData?.id)
    }
  }, [seasonNumber, showSeasons])

  const { data: seasonsEpisodes, error: SeasonsEpisodesError } =
    api.getTvShowSeasonsEpisodes({
      seasonId,
    })

  useEffect(() => {
    if (seasonsEpisodes && episodeNumber) {
      const episodeData = seasonsEpisodes.find(
        (episodes) => episodes?.number === Number(episodeNumber)
      )

      setEpisodeData(episodeData)
    }
  }, [seasonsEpisodes, episodeNumber])

  const getSummaryText = () => {
    return episodeData?.summary.split('<p>')[1].split('</p>')[0]
  }

  const formatDate = (date) => {
    return moment(date).format('YYYY MMMM Do HH:mm')
  }

  return (
    <PageWrap>
      <Logo onClick={() => navigate('/')}>GalaxyPlex</Logo>
      <PageHeader>
        <GoBackButton data-testid="go-back-button" onClick={() => navigate(-1)}>
          <GoBackButtonIcon />
        </GoBackButton>
        <PageTitle data-testid="page-title">{`${showInfo?.name} / Season ${seasonNumber} / Episode ${episodeNumber}`}</PageTitle>
      </PageHeader>

      <InfoBlock vertical paddingAside={isMobile ? 8 : 16}>
        {showSeasonsError || SeasonsEpisodesError ? (
          <Alert>Episode info doesn't loaded!...try to reload a page.</Alert>
        ) : (
          <>
            {isMobile && (
              <EpisodeCover url={episodeData?.image.original} data-testid="episode-cover" />
            )}
            <InfoBlockTitle noMargin fontSize={24} data-testid="episode-name">
              {episodeData?.name}
            </InfoBlockTitle>
            <Airstamp data-testid="episode-airstamp">
              {formatDate(episodeData?.airstamp)}
            </Airstamp>
            {!isMobile && (
              <EpisodeCover url={episodeData?.image.original} data-testid="episode-cover" />
            )}
            <SummaryText data-testid="episode-summary">{getSummaryText()}</SummaryText>
          </>
        )}
      </InfoBlock>
    </PageWrap>
  )
}

export default TvShowEpisodePage
