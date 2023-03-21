import React from "react";
import { Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

import HomePage from "./HomePage";
import TvShowPage from "./TvShowPage";
import TvShowSeasonPage from "./TvShowSeasonPage";

const history = createBrowserHistory();

const Router = () => {
  return (
    <Routes history={history}>
      <Route path="/" element={<HomePage />} />
      <Route path="tv-show/:id" element={<TvShowPage />} />
      <Route
        path="/tv-show/:name/season/:seasonId"
        element={<TvShowSeasonPage />}
      />
    </Routes>
  );
};

export default Router;
