import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../api'

import {
  PageWrap,
  PageHeader,
  GoBackButton,
  GoBackButtonIcon,
  PageTitle,
  InfoBlock,
  Cover,
  Alert,
  Logo,
} from '../../globalStyles'
import { ShowDetails, ShowDetailsText, ShowSeasonLink, ShowSeasonList } from './style'

const TvShowPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: showInfo, error: showInfoError } = api.getTvShowInfo({
    showId: id,
  })
  const { data: showSeasons, error: showSeasonsError } = api.getTvShowSeasons({
    showId: id,
  })

  const genres = showInfo?.genres.join(', ')

  return (
    <PageWrap>
      <Logo onClick={() => navigate('/')}>GalaxyPlex</Logo>
      <PageHeader>
        <GoBackButton data-testid="go-back-button" onClick={() => navigate('/')}>
          <GoBackButtonIcon />
        </GoBackButton>
        <PageTitle>{showInfo?.name}</PageTitle>
      </PageHeader>

      {showInfoError && (
        <Alert>
          The TV Show data doesn't loaded!...try to reload a page or go back to main page.
        </Alert>
      )}

      {showInfo && !showInfoError && (
        <InfoBlock>
          <Cover
            data-testid="show-cover"
            url={showInfo?.image?.original || showInfo?.image?.medium}
          />
          <ShowDetails data-testid="show-details">
            <ShowDetailsText>{genres}</ShowDetailsText>
            <ShowDetailsText>{`premiered: ${showInfo?.premiered}`}</ShowDetailsText>
            <ShowDetailsText>{`rating: ${showInfo?.rating.average}`}</ShowDetailsText>
            {showSeasonsError && <>The list of seasons not loaded</>}
            {showSeasons && !showSeasonsError && (
              <ShowSeasonList data-testid="show-seasons-list">
                {showSeasons.map((season) => (
                  <ShowSeasonLink
                    data-testid="show-season"
                    // onClick={() => navigate(`main/tv-show/${id}/season/${season.number}`)}
                    onClick={() => navigate(`season/${season.number}`)}
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
  )
}

export default TvShowPage
