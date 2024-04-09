import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the Body Component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const inputBox = screen.getByTestId("searchInput");

  fireEvent.change(inputBox, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const resCard = screen.queryAllByTestId("resCard");

  expect(searchBtn).toBeInTheDocument();
  // should have 1 pizza card
  expect(resCard.length).toBe(0);
});

it("should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.queryAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(4);

  const filterBtn = screen.getByRole("button" , {name: "Top Rated Restaurant"});

  fireEvent.click(filterBtn);

  const cardAfterFilter = screen.queryAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(4);
});
