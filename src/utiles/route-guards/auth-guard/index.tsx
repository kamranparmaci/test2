import React, { FC, useEffect } from "react";
import { useContainer } from "inversify-react";
import { useNavigate } from "react-router-dom";
import { ChildrenProps } from "../../../types/root";
import UserServices from "../../../services/user-services";

const AuthGuard: FC<ChildrenProps> = ({ children }) => {
  const {
    auth: { isAuthenticated },
  } = useContainer(UserServices);
  const isAuth = isAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth/login", { replace: true });
    }
  }, [isAuth, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
