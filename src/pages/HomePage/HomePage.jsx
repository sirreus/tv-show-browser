import React from "react";

import ShowCard from "../../components/ShowCard";
import FavoriteCard from "../../components/FavoritesCard/FavoritesCard";

import api from "../../api";
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from "../../utils/favorites";

import { Alert } from "../../globalStyles";
import {
  PageWrap,
  ShowList,
  FavoritesList,
  FavoriteBlock,
  PageHeaderWrap,
} from "./style";
import SearchBar from "../../components/SearchBar";

const HomePage = () => {
  const defaultPaginationPage = 0;

  // const [paginationPage, setPaginationPage] = useState(defaultPaginationPage);

  const { data, error } = api.getTvShowList({
    paginationPage: defaultPaginationPage,
  });

  const toggleFavoritesHandler = (show) => {
    const localFav = getFavorites();
    if (Object.keys(localFav).includes(show.id.toString())) {
      removeFromFavorites(show);
    } else {
      addToFavorites(show);
    }
  };

  return (
    <PageWrap>
      <PageHeaderWrap>
        <h2>Welcome to GalaxyPlex!</h2>
        <SearchBar />
      </PageHeaderWrap>

      {Object.values(getFavorites()).length ? (
        <FavoriteBlock>
          <h2>My Favorites</h2>
          <div style={{ width: "inherit" }}>
            <FavoritesList>
              {Object.values(getFavorites()).map((show) => (
                <FavoriteCard
                  data={show}
                  key={show.id}
                  toggleFavorites={() => toggleFavoritesHandler(show)}
                  isFavorite={Boolean(
                    Object.values(getFavorites()).find(
                      (item) => item?.id === show?.id
                    )
                  )}
                />
              ))}
            </FavoritesList>
          </div>
        </FavoriteBlock>
      ) : null}

      {error && <Alert>We have some problem...please reload a page.</Alert>}

      {data && !error && (
        <>
          <h2>TV Shows</h2>
          <ShowList>
            {data &&
              data.map((show) => (
                <ShowCard
                  data={show}
                  key={show.id}
                  toggleFavorites={() => toggleFavoritesHandler(show)}
                  isFavorite={Boolean(
                    Object.values(getFavorites()).find(
                      (item) => item?.id === show?.id
                    )
                  )}
                />
              ))}
          </ShowList>
        </>
      )}
    </PageWrap>
  );
};

export default HomePage;
