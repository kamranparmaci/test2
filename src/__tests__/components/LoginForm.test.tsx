// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import LoginForm from "../../components/forms/login-form";

// const setup = () => {
//   const mockSubmit = jest.fn();
//   render(<LoginForm submit={mockSubmit} />);
//   const usernameField = screen.getByLabelText("Username");
//   const passwordField = screen.getByLabelText("Password");

//   const button = screen.getByText(/login/i);
//   return {
//     usernameField,
//     passwordField,
//     button,
//     mockSubmit,
//   };
// };

// describe("login form", () => {
//   test("submits the form with the correct values", async () => {
//     const { usernameField, passwordField, button, mockSubmit } = setup();

//     fireEvent.change(usernameField, { target: { value: "test user" } });
//     fireEvent.change(passwordField, { target: { value: "testPassword" } });

//     fireEvent.click(button);

//     expect(mockSubmit).toHaveBeenCalledWith("test user", "testPassword");
//   });

//   test("check username input is rendered", () => {
//     const { usernameField } = setup();

//     expect(usernameField).toBeInTheDocument();
//   });

//   test("check password input is rendered", () => {
//     const { passwordField } = setup();
//     expect(passwordField).toBeInTheDocument();
//   });

//   test("button disabled when inputs is empty", () => {
//     const { usernameField, passwordField, button } = setup();

//     expect(button).toBeDisabled();

//     fireEvent.change(usernameField, { target: { value: "kamran" } });
//     fireEvent.change(passwordField, { target: { value: "password" } });

//     expect(button).toBeEnabled();
//   });
// });

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "../../components/forms/login-form";

describe("LoginForm", () => {
  it("should submit the form when the login button is clicked", () => {
    const submitMock = jest.fn();

    render(<LoginForm submit={submitMock} />);

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("login-button"));

    expect(submitMock).toHaveBeenCalledWith("testuser", "password123");
  });

  it("should show an error message when the username is too short", () => {
    render(<LoginForm submit={() => {}} />);

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "ab" },
    });

    expect(
      screen.getByText(/Username must be at least 3 characters long/)
    ).toBeInTheDocument();
  });

  it("should show an error message when the password is too short", () => {
    render(<LoginForm submit={() => {}} />);

    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "1234567" },
    });

    expect(
      screen.getByText(/Password must be at least 8 characters long/)
    ).toBeInTheDocument();
  });
});
