import { render, screen, waitFor } from "@testing-library/react";
import DashboardPage from "../../pages/dashboard";

jest.mock("../../hooks/useFetchUsers", () => ({
  __esModule: true,
  default: jest.fn(() => [[{ id: 1, name: "john" }]]),
}));

describe("DashboardPage", () => {
  test("renders user list", async () => {
    render(<DashboardPage />);
    const userListElement = await screen.findByTestId("user-list");
    expect(userListElement).toBeInTheDocument();
  });
});
