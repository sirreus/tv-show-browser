/* eslint-disable import/first */
import React from 'react'
import Router from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'

jest.mock('../api')

import api from '../api'
import { showData, showSeasonData, showSeasonEpisodesData } from './testData'

import TvShowSeasonPage from '../pages/TvShowSeasonPage/TvShowSeasonPage'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: jest.fn(),
}))

const setupComponent = () => {
  return render(<TvShowSeasonPage />)
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

describe('Render TV SHow Season page', () => {
  const seasonNumber = '4'
  const currentSeason = showSeasonData.data.find(
    (season) => season.number === Number(seasonNumber)
  )
  beforeEach(() => {
    jest
      .spyOn(Router, 'useParams')
      .mockReturnValue({ id: showData.data.id.toString(), seasonNumber })
    api.getTvShowInfo.mockReturnValue(showData)
    api.getTvShowSeasons.mockReturnValue(showSeasonData)
    api.getTvShowSeasonsEpisodes.mockReturnValue(showSeasonEpisodesData)
  })

  it('season data should be displayed on the page', () => {
    setupComponent()

    const pageTitleEl = screen.getByTestId('page-title')
    expect(pageTitleEl).toHaveTextContent(
      `${showData.data.name} / Season ${seasonNumber} (${showSeasonEpisodesData.data.length} Episodes)`
    )
    expect(screen.getByTestId('season-cover')).toBeInTheDocument()
    expect(screen.getByTestId('season-details')).toBeInTheDocument()
    expect(screen.getByTestId('info-block-title')).toHaveTextContent(
      `Season premiere date:${currentSeason?.premiereDate}`
    )
    expect(screen.getByTestId('season-episodes-list')).toBeInTheDocument()

    const seasonArr = screen.getAllByTestId('season-episode')
    expect(seasonArr).toHaveLength(showSeasonEpisodesData.data.length)
  })

  it('click on episode should navigate to episode page', () => {
    setupComponent()

    const randomEpisode = random(1, showSeasonEpisodesData.data.length)

    const selectedEpisode = showSeasonEpisodesData.data[randomEpisode]

    const episode = screen.getByText(`Episode ${selectedEpisode.number}:`)

    fireEvent.click(episode)

    expect(mockNavigate).toHaveBeenCalledWith(
      `/tv-show/${showData.data.id}/season/${seasonNumber}/episode/${selectedEpisode?.number}`
    )
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
