import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "../../components/forms/login-form";

describe("LoginForm", () => {
  const mockSubmit = jest.fn();

  it("should renders username input and password input", () => {
    const { getByLabelText } = render(<LoginForm submit={mockSubmit} />);

    expect(getByLabelText("Username")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
  });

  it("should submit the form with username and password", async () => {
    const { getByLabelText, getByTestId } = render(
      <LoginForm submit={mockSubmit} />
    );

    fireEvent.change(getByLabelText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "testpassword" },
    });

    fireEvent.submit(getByTestId("login-button"));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith("testuser", "testpassword");
    });
  });

  it("should display errors for invalid input", async () => {
    const { getByLabelText, getByRole, findByText } = render(
      <LoginForm submit={mockSubmit} />
    );

    fireEvent.change(getByLabelText("Username"), {
      target: { value: "a" },
    });

    fireEvent.change(getByLabelText("Password"), {
      target: { value: "1234567" },
    });

    fireEvent.submit(getByRole("button"));

    expect(
      await findByText("Username must be at least 3 characters long")
    ).toBeInTheDocument();
    expect(
      await findByText("Password must be at least 8 characters long")
    ).toBeInTheDocument();
  });
});
