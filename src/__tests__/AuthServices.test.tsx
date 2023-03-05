import { useContainer } from 'inversify-react';
import { CheckIsAuthenticated } from '../services/auth-services';

describe('checkIsAuthenticated', () => {
  const isAuth = useContainer(CheckIsAuthenticated);

  it('returns true when token exists in local storage', () => {
    const getItemMock = jest.spyOn(localStorage, 'getItem');
    getItemMock.mockReturnValueOnce('token');
    expect(isAuth).toBe(true);
    getItemMock.mockRestore();
  });

  it('returns false when token does not exist in local storage', () => {
    const getItemMock = jest.spyOn(localStorage, 'getItem');
    getItemMock.mockReturnValueOnce(null);
    expect(isAuth).toBe(false);
    getItemMock.mockRestore();
  });
});
