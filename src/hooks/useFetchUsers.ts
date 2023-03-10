import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Users } from "../types/root";
import { axiosInstance } from "../utiles/axios-instance";

export const useFetchUsers = (url: string) => {
  const [users, setUsers] = useState<Users[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await axiosInstance.get<any, Users[]>(url);
      setUsers(data);
    } catch (error: AxiosError | any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users };
};
