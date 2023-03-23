import React, { useState } from "react";

import ShowCard from "../../components/ShowCard";

import { PageWrap, ShowListWrap } from "./style";
import api from "../../api";
import { Alert } from "../../globalStyles";

const HomePage = () => {
  const defaultPaginationPage = 0;

  const [paginationPage, setPaginationPage] = useState(defaultPaginationPage);

  const { data, error } = api.getTvShowList({ paginationPage });

  return (
    <PageWrap>
      <h2>Welcome to GalaxyPlex!</h2>
      {error && <Alert>We have some problem...please reload a page.</Alert>}

      {data && !error && (
        <ShowListWrap>
          {data && data.map((show) => <ShowCard data={show} key={show.id} />)}
        </ShowListWrap>
      )}
    </PageWrap>
  );
};

export default HomePage;
