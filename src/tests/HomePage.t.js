/* eslint-disable import/first */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { render, screen } from "@testing-library/react";

jest.mock("../api");

import HomePage from "../pages/HomePage";

import routes from "../routes";
import api from "../api";
import testData from "./testData";

const setupComponent = () => {
  return render(
    <RouterProvider
      router={createBrowserRouter([
        {
          path: routes.main,
          element: <HomePage />,
        },
      ])}
    />
  );
};

describe("Render Home page tests", () => {
  beforeEach(() => {
    api.getTvShowList.mockResolvedValue({ testData });
  });
  test("page title should display on the page", () => {
    setupComponent();

    const titleEl = screen.getByTestId("home-title");
    expect(titleEl).toHaveTextContent("Welcome to GalaxyPlex!");
  });
});
