import React, { useState } from "react";
import useSWR from "swr";
import ShowCard from "../../components/ShowCard";
import { requestFetcher } from "../../helpers/requestFetcher";
import { ShowListWrap } from "./style";

const HomePage = () => {
  const BASE_URL = "https://api.tvmaze.com";
  const defaultPaginationPage = 0;

  const [paginationPage, setPaginationPage] = useState(defaultPaginationPage);

  const { data, error } = useSWR(
    `${BASE_URL}/shows?page=${paginationPage}`,
    requestFetcher
  );

  if (error) return <>Something went wrong!...please reload a page.</>;

  return (
    <>
      <h2>HomePage</h2>
      <ShowListWrap>
        {data && data.map((show) => <ShowCard data={show} key={show.id} />)}
      </ShowListWrap>
    </>
  );
};

export default HomePage;
