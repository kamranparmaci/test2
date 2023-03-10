import { Users } from "../root";

export type UseFetchUsersReturnType = {
  users: Users[];
  isLoading: boolean;
  isError: boolean;
};
