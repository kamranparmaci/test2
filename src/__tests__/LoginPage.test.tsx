import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/login";

describe("rendered WelCome text", () => {
  test("", () => {
    render(<LoginPage />);

    const welcomeText = screen.getByText(/welcome to my app/i);

    expect(welcomeText).toBeInTheDocument();
  });
});
