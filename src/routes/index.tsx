import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import GuestGuard from "../utils/route-guards/guest-guard";
import AuthGuard from "../utils/route-guards/auth-guard";
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <AuthGuard>
            <DashboardPage />
          </AuthGuard>
        }
      />
      <Route
        path="login"
        element={
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        }
      />
    </Route>
  )
);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
