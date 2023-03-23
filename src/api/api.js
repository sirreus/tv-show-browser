import useSWR from "swr";
import { API_BASE_URL } from "../constants";
import { requestFetcher } from "./helpers/requestFetcher";

const useGetTvShowList = ({ paginationPage }) =>
  useSWR(`${API_BASE_URL}/shows?page=${paginationPage}`, requestFetcher);

const useGetTvShowInfo = ({ showId }) =>
  useSWR(`${API_BASE_URL}/shows/${showId}`, requestFetcher);

const useGetTvShowSeasons = ({ showId }) =>
  useSWR(`${API_BASE_URL}/shows/${showId}/seasons`, requestFetcher);

const useGetTvShowSeasonsEpisodes = ({ seasonId }) =>
  useSWR(`${API_BASE_URL}/seasons/${seasonId}/episodes`, requestFetcher);

const useGetTvShowEpisodeInfo = ({ episodeId }) =>
  useSWR(`${API_BASE_URL}/episodes/${episodeId}`, requestFetcher);

const api = {
  getTvShowList: useGetTvShowList,
  getTvShowInfo: useGetTvShowInfo,
  getTvShowSeasons: useGetTvShowSeasons,
  getTvShowSeasonsEpisodes: useGetTvShowSeasonsEpisodes,
  getTvShowEpisodeInfo: useGetTvShowEpisodeInfo,
};

export default api;
