import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '../../pages/dashboard';
import LoginPage from '../../pages/login';

describe('test routes', () => {
  test('rendered the login page when user not logged in', () => {
    render(
      <MemoryRouter initialEntries={['/auth/login']}>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
      </MemoryRouter>
    );

    window.history.pushState({}, '', '/auth/login');

    expect(window.location.href).toBe('http://localhost/auth/login');
  });

  test('rendered the dashboard page when user logged in', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </MemoryRouter>
    );

    window.history.pushState({}, '', '/');

    expect(window.location.href).toBe('http://localhost/');
  });
});
