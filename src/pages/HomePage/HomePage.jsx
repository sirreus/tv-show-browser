import React, { useState } from "react";

import ShowCard from "../../components/ShowCard";

import { PageWrap, ShowListWrap } from "./style";
import api from "../../api";

const HomePage = () => {
  const defaultPaginationPage = 0;

  const [paginationPage, setPaginationPage] = useState(defaultPaginationPage);

  const { data, error } = api.getTvShowList({ paginationPage });

  if (error) return <>Something went wrong!...please reload a page.</>;

  return (
    <PageWrap>
      <h2>Welcome to GalaxyPlex!</h2>
      <ShowListWrap>
        {data && data.map((show) => <ShowCard data={show} key={show.id} />)}
      </ShowListWrap>
    </PageWrap>
  );
};

export default HomePage;
