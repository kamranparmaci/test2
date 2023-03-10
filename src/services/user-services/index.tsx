import useAuth from "../../hooks/useAuth";
import { useFetchUsers } from "../../hooks/useFetchUsers";

const UserServices = () => {
  const auth = useAuth();
  const { users } = useFetchUsers("/data/fakeUsers.json");

  return { auth, users };
};

export default UserServices;
