import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Querying
  const loginButton = screen.getByRole("button");
  // Assertion
  expect(loginButton).toBeInTheDocument();
});

it("should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Querying
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton)
  const logoutButton = screen.getByRole("button" , {name: "Logout"});
  // Assertion
  expect(logoutButton).toBeInTheDocument();
});
