import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import GuestGuard from "../utiles/route-guards/guest-guard";
import AuthGuard from "../utiles/route-guards/auth-guard";
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <AuthGuard>
            <DashboardPage />
          </AuthGuard>
        }
      />
      <Route
        path="auth/login"
        element={
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        }
      />
    </>
  )
);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
