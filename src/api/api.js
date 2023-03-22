import useSWR from "swr";
import { API_BASE_URL } from "../constants";
import { requestFetcher } from "./helpers/requestFetcher";

const useGetTvShowList = ({ paginationPage }) =>
  useSWR(`${API_BASE_URL}/shows?page=${paginationPage}`, requestFetcher);

const useGetTvShowInfo = ({ showId }) =>
  useSWR(`https://api.tvmaze.com/shows/${showId}`, requestFetcher);

const useGetTvShowSeasons = ({ showId }) =>
  useSWR(`https://api.tvmaze.com/shows/${showId}/seasons`, requestFetcher);

const api = {
  getTvShowList: useGetTvShowList,
  getTvShowInfo: useGetTvShowInfo,
  getTvShowSeasons: useGetTvShowSeasons,
};

export default api;
