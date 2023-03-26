/* eslint-disable import/first */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("../api");

import HomePage from "../pages/HomePage";

import api from "../api";
import { fetchDataFull, searchData } from "./testData";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const setupComponent = () => {
  return render(<HomePage />);
};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

describe("Render Home page tests", () => {
  beforeEach(() => {
    api.getTvShowList.mockReturnValue(fetchDataFull);
    api.getSearch.mockReturnValue(searchData);
  });

  test("page title should be displayed on the page", () => {
    setupComponent();

    const titleEl = screen.getByTestId("home-title");
    expect(titleEl).toHaveTextContent("Welcome to GalaxyPlex!");
  });

  test("Search bar should be displayed on the page", () => {
    setupComponent();

    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  });

  test("TV Shows section should be displayed on the page", () => {
    setupComponent();

    expect(screen.getByText("TV Shows")).toBeInTheDocument();
    expect(screen.getByTestId("show-list")).toBeInTheDocument();
  });

  test("Amount of displayed Shows should be equal 28", () => {
    setupComponent();

    const showCardsArr = screen.getAllByTestId("show-card");
    expect(showCardsArr.length).toBe(28);
  });

  test("Pagination should be displayed on the page", () => {
    setupComponent();

    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  test("Click on Show card should navigate to this TV Show page", () => {
    setupComponent();

    const randomCard = random(0, fetchDataFull.data.length - 1);

    const card = screen.getByTestId(
      `show-img-${fetchDataFull.data[randomCard].id}`
    );

    fireEvent.click(card);

    expect(mockNavigate).toHaveBeenCalledWith(
      `/tv-show/${fetchDataFull.data[randomCard].id}`
    );
  });
});
