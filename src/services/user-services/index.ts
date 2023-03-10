import { useNavigate } from "react-router-dom";
import { fakeUsers } from "../../assets/data/fakeUsers";
import useFetchUsers from "../../hooks/useFetchUsers";
import { UserLogin } from "../../types/services/userServices";

const UserLogin = (): UserLogin => {
  const navigate = useNavigate();

  const login = (username: string, password: string) => {
    const foundUser = fakeUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      localStorage.setItem("token", JSON.stringify(foundUser.id));
      navigate("/");
    } else {
      alert("your password or username is not correct");
      return false;
    }
  };

  return { login };
};

const IsUserAuth = () => {
  const token = localStorage.getItem("token");
  const isAuth = token !== null;
  return { isAuth };
};

export { IsUserAuth, UserLogin };
