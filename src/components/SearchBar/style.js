import styled from "styled-components/macro";
import searchIcon from "../../assets/search-icon.svg";

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: fit-content;
  padding: 8px 12px;
  border-radius: 8px;
  border: 0.5px solid #c9cdd1;
  background: #f3f4f5;
  color: #444c53;

  &:focus {
    outline: none;
    width: 320px;
    border: 1px solid #777f87;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 6px;
  right: 4px;
  width: 24px;
  height: 24px;
  background-image: url(${searchIcon});
  z-index: 1;
  opacity: 0.6;
`;

export const SuggestList = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  display: ${(p) => (p.isVisible ? "flex" : "none")};
  flex-direction: column;
  width: 332px;
  height: fit-content;
  padding: 0 6px;
  background: #f3f4f5;
  border-radius: 8px;
  border: 1px solid #777f87;

  z-index: 1;
`;

export const SuggestListLabel = styled.span`
  padding: 6px;
  font-size: 12px;
  color: #444c53;
`;

export const SuggestListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 8px 6px;
  color: #777f87;

  cursor: pointer;

  z-index: 1;

  &:hover {
    color: #2d353e;
  }
`;
