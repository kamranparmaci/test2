import { render, screen } from "@testing-library/react";
import NotMatchPage from "../pages/404";

test("rendered not matched text", () => {
  render(<NotMatchPage />);

  const notMatchText = screen.getByText(/you are in wrong page/i);

  expect(notMatchText).toBeInTheDocument();
});
