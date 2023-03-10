import { act, renderHook } from "@testing-library/react-hooks";
import { fakeUsers } from "../../../assets/data/fakeUsers";
import { IsUserAuth, UserLogin } from "../../../services/user-services";

const navigateMock = jest.fn();
jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: () => navigateMock,
  };
});

const { login } = UserLogin();

describe("login", () => {
  beforeEach(() => {
    jest.spyOn(window.localStorage.__proto__, "setItem");
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.localStorage.clear();
  });

  it("should store token in local storage when correct credentials are provided", () => {
    login(fakeUsers[0].username, fakeUsers[0].password);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify(fakeUsers[0].id)
    );

    expect(navigateMock).toHaveBeenCalledWith("/");
  });

  it("should alert an error message when incorrect credentials are provided", () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation();

    login("invalid_username", "invalid_password");

    expect(alertSpy).toHaveBeenCalledWith(
      "your password or username is not correct"
    );
  });
});

describe("CheckIsAuthenticated", () => {
  it("returns true if a token is present in local storage", () => {
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

    // Set the token value in local storage
    localStorage.setItem("token", "test-token");

    act(() => {
      const { result } = renderHook(() => IsUserAuth().isAuth);
      expect(result.current).toBe(true);
    });

    localStorage.removeItem("token");
    setItemSpy.mockRestore();
  });

  it("returns false if a token is not present in local storage", () => {
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

    act(() => {
      const { result } = renderHook(() => IsUserAuth());
      expect(result.current.isAuth).toBe(false);
    });

    setItemSpy.mockRestore();
  });
});
