import { render, screen, waitFor } from "@testing-library/react";
import DashboardPage from "../../pages/dashboard";

jest.mock("../../hooks/useFetchUsers", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ],
    isLoading: false,
    isError: false,
  })),
}));

describe("DashboardPage", () => {
  it("renders list when data is loaded", async () => {
    render(<DashboardPage />);

    const userListItems = screen.queryAllByTestId("user-list");
    expect(userListItems.length).toBe(2);
  });
});
