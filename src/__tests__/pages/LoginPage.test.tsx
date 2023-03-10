import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "inversify";
import { Provider } from "inversify-react";
import LoginPage from "../../pages/login";
import { UserLogin } from "../../services/user-services";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("LoginPage", () => {
  it("renders login form", () => {
    // create a mock UserServices object
    const userServicesMock = {
      login: jest.fn(),
    };

    // create a mock container with the userServicesMock
    const container = new Container();
    container.bind(UserLogin).toConstantValue(userServicesMock);

    render(
      <Provider container={container}>
        <LoginPage />
      </Provider>
    );

    // check that the login form is rendered
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
  });
});
