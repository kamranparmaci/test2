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
    const data = mockAxios.onGet("/data/fakeUsers.json").reply(200);
    console.log(data);

    const { result, waitForNextUpdate } = renderHook(() => useFetchUsers());
    act(() => {
      expect(result.current.users).toEqual([]);
      expect(result.current.isLoading).toEqual(true);
      expect(result.current.isError).toEqual(false);
    });

    await waitForNextUpdate();
    act(() => {
      expect(result.current.users).toHaveLength(10);
      expect(result.current.isLoading).toEqual(false);
      expect(result.current.isError).toEqual(false);
    });
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
