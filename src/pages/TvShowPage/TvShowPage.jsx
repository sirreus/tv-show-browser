import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

import { requestFetcher } from "../../helpers/requestFetcher";

const TvShowPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error } = useSWR(
    `https://api.tvmaze.com/shows/${id}/seasons`,
    requestFetcher
  );

  if (error) return <>Something went wrong!...please reload a page.</>;

  console.log(data);

  return (
    <>
      <button onClick={() => navigate("/")}>go back</button>
      TvShowPage
    </>
  );
};

export default TvShowPage;
