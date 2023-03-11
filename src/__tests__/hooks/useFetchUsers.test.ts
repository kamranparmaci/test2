import { act, renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useFetchUsers from "../../hooks/useFetchUsers";
import { Users } from "../../types/root";

const mockAxios = new MockAdapter(axios);

describe("useFetchUsers", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should set users, isLoading to false and isError to false when request succeeds", async () => {
    const mockData = [
      {
        id: 1,
        username: "john doe",
        password: "12345678",
        email: "john@example.com",
        avatar: "../../images/men.jpg",
        describe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      },
    ];
    mockAxios.onGet("/data/fakeUsers.json").reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useFetchUsers());
    act(() => {
      expect(result.current.users).toEqual([]);
      expect(result.current.isLoading).toEqual(true);
      expect(result.current.isError).toEqual(false);
    });

    await waitForNextUpdate();

    const { data } = await axios.get("/data/fakeUsers.json");

    expect(data).toEqual(mockData);
  });

  it("should set isError to true and isLoading to false when request fails", async () => {
    const errorMessage = "Network Error";
    mockAxios.onGet("/data/fakeUsers.json").reply(500, errorMessage);

    const { result, waitForNextUpdate } = renderHook(() => useFetchUsers());

    expect(result.current.users).toEqual([]);
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.isError).toEqual(false);

    await waitForNextUpdate();

    expect(result.current.users).toEqual([]);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.isError).toEqual(true);
  });
});
