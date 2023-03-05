import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../../pages/dashboard';

const protectedRoutes = () => {
  return (
    <Routes>
      <Route index element={<DashboardPage />} />
    </Routes>
  );
};

export default protectedRoutes;
