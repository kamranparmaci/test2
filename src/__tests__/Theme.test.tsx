import { render, screen } from "@testing-library/react";
import App from "../App";
import MockTheme from "../themes/mock-theme";

test("rendered children in theme provider", () => {
  render(
    <MockTheme>
      <App />
    </MockTheme>
  );

  // expect(text).toBeInTheDocument();
});
