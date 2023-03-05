import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthRoutes from './auth-routes';
import ProtectedRoutes from './protected-routes';
import NotMatchPage from '../pages/404';
import GuestGuard from '../utiles/route-guards/guest-guard';
import AuthGuard from '../utiles/route-guards/auth-guard';

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="dashboard/*"
        element={
          <AuthGuard>
            <ProtectedRoutes />
          </AuthGuard>
        }
      />
      <Route
        path="auth/*"
        element={
          <GuestGuard>
            <AuthRoutes />
          </GuestGuard>
        }
      />
      <Route path="*" element={<NotMatchPage />} />
    </Routes>
  );
};

export default MainRoutes;
