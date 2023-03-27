import React from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import HomePage from './pages/HomePage'
import TvShowPage from './pages/TvShowPage'
import TvShowSeasonPage from './pages/TvShowSeasonPage'
import TvShowEpisodePage from './pages/TvShowEpisodePage'
import NotFoundPage from './pages/NotFoundPage'

import routes from './routes'

const history = createBrowserHistory()

function App() {
  return (
    <HashRouter>
      <Routes history={history}>
        <Route path="/" element={<Navigate to={routes.main} />} />
        <Route path={routes.main} element={<HomePage />} />
        <Route path={routes.tvShow} element={<TvShowPage />} />
        <Route path={routes.tvShowSeason} element={<TvShowSeasonPage />} />
        <Route path={routes.tvShowEpisode} element={<TvShowEpisodePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
