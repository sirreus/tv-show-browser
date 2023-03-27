/* eslint-disable import/first */
import React from 'react'
import Router from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import moment from 'moment'

jest.mock('../api')

import api from '../api'
import { showData, showSeasonData, showSeasonEpisodesData } from './testData'

import TvShowEpisodePage from '../pages/TvShowEpisodePage/TvShowEpisodePage'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: jest.fn(),
}))

const setupComponent = () => {
  return render(<TvShowEpisodePage />)
}

describe('Render TV SHow Episode page', () => {
  const seasonNumber = '4'
  const episodeNumber = '2'
  const currentEpisode = showSeasonEpisodesData.data.find(
    (episode) => episode.number === Number(episodeNumber)
  )
  beforeEach(() => {
    jest
      .spyOn(Router, 'useParams')
      .mockReturnValue({ id: showData.data.id.toString(), seasonNumber, episodeNumber })
    api.getTvShowInfo.mockReturnValue(showData)
    api.getTvShowSeasons.mockReturnValue(showSeasonData)
    api.getTvShowSeasonsEpisodes.mockReturnValue(showSeasonEpisodesData)
  })

  it('episode data should be displayed on the page', () => {
    setupComponent()

    const pageTitleEl = screen.getByTestId('page-title')
    expect(pageTitleEl).toHaveTextContent(
      `${showData.data.name} / Season ${seasonNumber} / Episode ${episodeNumber}`
    )
    expect(screen.getByTestId('episode-name')).toHaveTextContent(currentEpisode?.name)
    expect(screen.getByTestId('episode-cover')).toBeInTheDocument()
    expect(screen.getByTestId('episode-airstamp')).toHaveTextContent(
      moment(currentEpisode?.airstamp).format('YYYY MMMM Do HH:mm')
    )

    const summaryText = currentEpisode?.summary.split('<p>')[1].split('</p>')[0]
    expect(screen.getByTestId('episode-summary')).toHaveTextContent(summaryText)
  })

  it('click on logo should navigate to Home page', () => {
    setupComponent()

    const logo = screen.getByText('GalaxyPlex')

    fireEvent.click(logo)

    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('click on back button should navigate to Home page', () => {
    setupComponent()

    const goBackButton = screen.getByTestId('go-back-button')

    fireEvent.click(goBackButton)

    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })
})
