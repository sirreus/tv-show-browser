/* eslint-disable import/first */
import React from "react";
import Router from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("../api");

import api from "../api";
import { showData, showSeasonData } from "./testData";
import TvShowPage from "../pages/TvShowPage/TvShowPage";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useParams: jest.fn(),
}));

const setupComponent = () => {
  return render(<TvShowPage />);
};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

describe("Render TV SHow page", () => {
  beforeEach(() => {
    jest
      .spyOn(Router, "useParams")
      .mockReturnValue({ id: showData.data.id.toString() });
    api.getTvShowInfo.mockReturnValue(showData);
    api.getTvShowSeasons.mockReturnValue(showSeasonData);
  });

  test("show data should be displayed on the page", () => {
    setupComponent();

    expect(screen.getByText(showData.data.name)).toBeInTheDocument();
    expect(screen.getByTestId("show-cover")).toBeInTheDocument();
    expect(screen.getByTestId("show-details")).toBeInTheDocument();
    expect(screen.getByTestId("show-seasons-list")).toBeInTheDocument();
    expect(screen.getAllByTestId("show-season").length).toBe(
      showSeasonData.data.length
    );
  });

  test("click on season button should navigate to season page", () => {
    setupComponent();

    const randomSeason = random(1, showSeasonData.data.length);

    const season = screen.getByText(
      `Season ${showSeasonData.data[randomSeason].number}`
    );

    fireEvent.click(season);

    expect(mockNavigate).toHaveBeenCalledWith(
      `/tv-show/${showData?.data?.id}/season/${showSeasonData.data[randomSeason].number}`
    );
  });

  test("click on logo should navigate to Home page", () => {
    setupComponent();

    const logo = screen.getByText("GalaxyPlex");

    fireEvent.click(logo);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  test("click on back button should navigate to Home page", () => {
    setupComponent();

    const goBackButton = screen.getByTestId("go-back-button");

    fireEvent.click(goBackButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
