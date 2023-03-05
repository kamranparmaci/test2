import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import NotMatchPage from "../pages/404";
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";

describe("test routes", () => {
  const token: string | null = localStorage.getItem("token");

  const baseURL = token ? "/dashboard" : "auth/login";

  test("rendered 404 page", () => {
    render(
      <MemoryRouter initialEntries={["/some/bad/url"]}>
        <Routes>
          <Route path="/some/bad/url" element={<NotMatchPage />} />
        </Routes>
      </MemoryRouter>
    );

    window.history.pushState({}, "", "/some/bad/url");

    expect(window.location.href).toEqual("http://localhost/some/bad/url");
  });

  test("rendered the login page when user not logged in", () => {
    render(
      <MemoryRouter initialEntries={[baseURL]}>
        <Routes>
          <Route path="dashboard" element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    );

    window.history.pushState({}, "", "/auth/login");

    expect(window.location.href).toBe("http://localhost/auth/login");
  });

  test("rendered the dashboard page when user logged in", () => {
    render(
      <MemoryRouter initialEntries={[baseURL]}>
        <Routes>
          <Route path="dashboard" element={<DashboardPage />} />
        </Routes>
      </MemoryRouter>
    );

    window.history.pushState({}, "", "/dashboard");

    expect(window.location.href).toBe("http://localhost/dashboard");
  });
});
