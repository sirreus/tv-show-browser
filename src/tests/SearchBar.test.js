/* eslint-disable import/first */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("../api");

import { searchData } from "./testData";
import SearchBar from "../components/SearchBar";
import api from "../api";

// jest.mock("../api", () => ({
//   // ...jest.requireActual("../api"),
//   getSearch: () => jest.fn().mockReturnValue({ searchData }),
// }));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const setupComponent = () => {
  return render(<SearchBar />);
};

describe("Search bar", () => {
  beforeEach(() => {
    api.getSearch.mockResolvedValue({ searchData });
  });

  test("search bar should be available to type", () => {
    const inputName = "Californication";
    setupComponent();

    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toBeDefined();

    fireEvent.change(inputEl, { target: { value: inputName } });
    expect(inputEl).toHaveValue(inputName);
  });
});
