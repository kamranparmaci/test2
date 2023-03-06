import { render, screen } from "@testing-library/react";
import DashboardPage from "../../pages/dashboard";

test("rendered dashboard page welcome text", () => {
  render(<DashboardPage />);

  const dashboardWelcomeText = screen.getByText(
    /welcome to my dashboard page/i
  );
  expect(dashboardWelcomeText).toBeInTheDocument();
});
