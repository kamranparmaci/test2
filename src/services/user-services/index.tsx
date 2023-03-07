import useAuth from "../../hooks/useAuth";

const UserServices = () => {
  const auth = useAuth();
  return auth;
};

export { UserServices };
