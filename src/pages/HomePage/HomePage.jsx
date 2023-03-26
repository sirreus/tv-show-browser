import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import ShowCard from "../../components/ShowCard";
import SearchBar from "../../components/SearchBar";
import FavoriteCard from "../../components/FavoritesCard";

import api from "../../api";
import { useMedia } from "../../hooks/media";
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from "../../utils/favorites";

import { Alert, PageWrap } from "../../globalStyles";
import {
  ShowList,
  FavoritesList,
  FavoriteBlock,
  FavoriteBlockWrapper,
  PageHeaderWrap,
  Pagination,
} from "./style";
import "./pagination.css";

const HomePage = () => {
  const isMobile = useMedia();

  const itemsPerPage = 28;
  const defaultPaginationPage = 0;

  const [pageCount, setPageCount] = useState(defaultPaginationPage);
  const [itemOffset, setItemOffset] = useState(0);

  const [favoritesShow, setFavoritesShow] = useState(getFavorites());

  const { data, error } = api.getTvShowList({
    paginationPage: defaultPaginationPage,
  });

  const toggleFavoritesHandler = (show) => {
    const localFav = getFavorites();
    if (Object.keys(localFav).includes(show.id.toString())) {
      setFavoritesShow(removeFromFavorites(show));
    } else {
      setFavoritesShow(addToFavorites(show));
    }
  };

  useEffect(() => {
    if (data) {
      setPageCount(Math.ceil(data.length / 30));
    }
  }, [data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const endOffset = itemOffset + itemsPerPage;
  const displayedShows = data ? data.slice(itemOffset, endOffset) : [];

  return (
    <PageWrap isMobile={isMobile}>
      <PageHeaderWrap isMobile={isMobile}>
        <h2>Welcome to GalaxyPlex!</h2>
        <SearchBar />
      </PageHeaderWrap>

      {/* FAVORITES SECTION */}
      {Object.values(favoritesShow).length ? (
        <FavoriteBlock>
          <h2>My Favorites</h2>
          <FavoriteBlockWrapper>
            <FavoritesList>
              {Object.values(favoritesShow).map((show) => (
                <FavoriteCard
                  data={show}
                  key={show.id}
                  toggleFavorites={() => toggleFavoritesHandler(show)}
                  isFavorite={Boolean(
                    Object.values(favoritesShow).find(
                      (item) => item?.id === show?.id
                    )
                  )}
                />
              ))}
            </FavoritesList>
          </FavoriteBlockWrapper>
        </FavoriteBlock>
      ) : null}

      {error && <Alert>We have some problem...please reload a page.</Alert>}

      {/* TV SHOW SECTION */}
      {displayedShows && !error && (
        <>
          <h2>TV Shows</h2>
          <ShowList>
            {displayedShows.map((show) => (
              <ShowCard
                data={show}
                key={show.id}
                toggleFavorites={() => toggleFavoritesHandler(show)}
                isFavorite={Boolean(
                  Object.values(favoritesShow).find(
                    (item) => item?.id === show?.id
                  )
                )}
              />
            ))}
          </ShowList>
        </>
      )}

      <Pagination>
        <ReactPaginate
          id="pagination"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={isMobile ? 3 : pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </Pagination>
    </PageWrap>
  );
};

export default HomePage;
