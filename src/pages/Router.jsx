import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import HomePage from './HomePage'
import TvShowPage from './TvShowPage'
import TvShowSeasonPage from './TvShowSeasonPage'
import TvShowEpisodePage from './TvShowEpisodePage'
import NotFoundPage from './NotFoundPage'

import routes from '../routes'

const history = createBrowserHistory()

const Router = () => {
  return (
    <Routes history={history}>
      <Route path="/" element={<Navigate to={routes.main} />} />
      <Route path={routes.main} element={<HomePage />} />
      <Route path={routes.tvShow} element={<TvShowPage />} />
      <Route path={routes.tvShowSeason} element={<TvShowSeasonPage />} />
      <Route path={routes.tvShowEpisode} element={<TvShowEpisodePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router
