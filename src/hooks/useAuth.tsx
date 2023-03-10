import { useNavigate } from "react-router-dom";
import { Users } from "../types/root";
import { useFetchUsers } from "./useFetchUsers";

const useAuth = () => {
  const navigate = useNavigate();
  const { users } = useFetchUsers("/data/fakeUsers.json");
  const userLoggedIn = (
    username: string,
    password: string
  ): Users | undefined =>
    users.find(
      (user) => user.password === password && user.username === username
    );

  const login = (username: string, password: string) => {
    const user = userLoggedIn(username, password);
    if (user) {
      localStorage.setItem("token", JSON.stringify(user.id));
      navigate("/");
    } else {
      alert("your password or username is not correct");
    }
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null;
  };

  return { login, isAuthenticated };
};

export default useAuth;
