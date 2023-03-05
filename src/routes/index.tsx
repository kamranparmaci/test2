import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useContainer } from "inversify-react";
import AuthServices from "../services/auth-services";
import AuthRoutes from "./auth-routes";
import ProtectedRoutes from "./protected-routes";
import NotMatchPage from "../pages/404";

const MainRoutes = () => {
  const { authNavigation } = useContainer(AuthServices);

  authNavigation();

  return (
    <Routes>
      <Route path="/*" element={<ProtectedRoutes />} />
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="*" element={<NotMatchPage />} />
    </Routes>
  );
};

export default MainRoutes;
