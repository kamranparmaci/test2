import React from "react";
import { render } from "@testing-library/react";
import fakeUsers from "../__mocks__/fake-users/json/fakeUsers";
import DashboardPage from "../../pages/dashboard";

describe("DashboardPage", () => {
  it("renders the user list", () => {
    const { getByText } = render(<DashboardPage />);
    fakeUsers.forEach((user) => {
      const name = getByText(user.username);
      expect(name).toBeInTheDocument();
    });
  });
});
