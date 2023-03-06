import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "../../pages/dashboard";
import LoginPage from "../../pages/login";

describe("test routes", () => {
  const token: string | null = localStorage.getItem("token");

  const baseURL = token ? "/dashboard" : "/auth/login";

  test("rendered the login page when user not logged in", () => {
    render(
      <MemoryRouter initialEntries={["/auth/login"]}>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    );

    window.history.pushState({}, "", "/auth/login");

    expect(window.location.href).toBe("http://localhost/auth/login");
  });

  test("rendered the dashboard page when user logged in", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </MemoryRouter>
    );

    window.history.pushState({}, "", "/dashboard");

    expect(window.location.href).toBe("http://localhost/dashboard");
  });
});
