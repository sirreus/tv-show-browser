import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import TvShowPage from "./TvShowPage";
import TvShowSeasonPage from "./TvShowSeasonPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tv-show/:name" element={<TvShowPage />} />
      <Route
        path="/tv-show/:name/season/:seasonId"
        element={<TvShowSeasonPage />}
      />
    </Routes>
  );
};

export default Router;
