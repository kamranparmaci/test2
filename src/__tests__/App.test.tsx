import { render, screen } from "@testing-library/react";
import App from "../App";

test("rendered Hello World text", () => {
  render(<App />);

  const text = screen.getByTestId(/app/i);

  expect(text).toBeInTheDocument();
});
