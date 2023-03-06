import { render } from "@testing-library/react";
import Theme from "../../themes";

test("rendered children in theme provider", () => {
  const { getByText } = render(
    <Theme>
      <div>My Component</div>
    </Theme>
  );

  expect(getByText(/My Component/i)).toBeInTheDocument();

  // expect(text).toBeInTheDocument();
});
