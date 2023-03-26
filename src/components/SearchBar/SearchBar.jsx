import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api";
import {
  addToLastSearch,
  getLastSearch,
  updateLastSearch,
} from "../../utils/search";

import {
  Overlay,
  Input,
  SearchIcon,
  SuggestList,
  SuggestListItem,
  SuggestListLabel,
} from "./style";

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setSuggestListVisible] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [lastSearch, setLastSearch] = useState([]);

  const handleChange = ({ value }) => {
    setSearchInput(value);

    if (value) {
      setSuggestListVisible(true);
    } else {
      setSuggestListVisible(false);
    }
  };

  const selectShowFromSearch = (show) => {
    const lastSearch = getLastSearch();
    const isShowIncluded = Object.keys(lastSearch).includes(show.id.toString());

    if (!isShowIncluded && Object.keys(lastSearch).length !== 5) {
      addToLastSearch(show);
    } else if (!isShowIncluded && Object.keys(lastSearch).length === 5) {
      updateLastSearch(show);
    }

    navigate(`/tv-show/${show.id}`);
  };

  const { data } = api.getSearch({ searchInput });

  console.log(JSON.stringify(data));

  const fetchLastSearch = () => {
    setOverlayVisible(true);
    const lastSearch = getLastSearch();

    const data = Object.values(lastSearch).length
      ? Object.values(lastSearch)
      : [];

    setLastSearch(data);
  };

  const suggestData = data && data.length > 0 ? data : lastSearch;

  return (
    <>
      <Overlay isVisible={isOverlayVisible} />
      <div
        style={{ position: "relative" }}
        onBlur={() => {
          setLastSearch([]);
          setOverlayVisible(false);
        }}
      >
        <Input
          data-testid="search-input"
          type="text"
          placeholder="go ahead!"
          value={searchInput}
          onChange={(e) => handleChange(e.target)}
          onFocus={() => fetchLastSearch()}
          onBlur={() => {
            setSearchInput("");
            setLastSearch([]);
            setOverlayVisible(false);
          }}
        />
        <SearchIcon />

        {suggestData && suggestData.length > 0 && (
          <SuggestList
            isVisible={lastSearch.length > 0 || isVisible}
            data-testid="suggest-list"
          >
            <SuggestListLabel>
              {data && data.length > 0 ? "Suggestions" : "Last search"}
            </SuggestListLabel>
            {suggestData.map(({ show }) => (
              <SuggestListItem
                data-testid="suggest-list-item"
                onClick={() => selectShowFromSearch(show)}
                key={show?.id}
              >
                {show?.name}
              </SuggestListItem>
            ))}
          </SuggestList>
        )}
      </div>
    </>
  );
};

export default SearchBar;
