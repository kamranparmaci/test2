import { UseFetchUsersReturnType } from "./../types/hooks/useFetchUsers";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { Users } from "../types/root";
import { axiosInstance } from "../utils/axios-instance";

const useFetchUsers = (): UseFetchUsersReturnType => {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      setIsError(false);
      const { data } = await axiosInstance.get<Users[]>("/data/fakeUsers.json");
      setUsers(data);
      setIsLoading(false);
    } catch (error: AxiosError | any) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isLoading, isError };
};

export default useFetchUsers;
