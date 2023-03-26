/* eslint-disable import/first */
import React from "react";
import { render, screen } from "@testing-library/react";

import { fetchData } from "./testData";
import ShowCard from "../components/ShowCard";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const setupComponent = () => {
  return render(<ShowCard data={fetchData.data[0]} />);
};

describe("Render TV Show card", () => {
  test("basic show data should displayed in component", () => {
    setupComponent();

    const showData = fetchData.data[0];

    expect(screen.getByTestId("show-img")).toHaveStyle(
      `background-image: url(${showData.image.original})`
    );
    expect(screen.getByTestId("show-name")).toHaveTextContent(showData.name);
    expect(screen.getByTestId("show-info")).toHaveTextContent(
      showData.genres.join(", "),
      showData.premiered,
      showData.rating.average
    );
  });
});
