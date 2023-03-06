import React, { FC, useEffect } from "react";
import { useContainer } from "inversify-react";
import { useNavigate } from "react-router-dom";
import { CheckIsAuthenticated } from "../../../services/auth-services";
import { ChildrenProps } from "../../../types/root";

const AuthGuard: FC<ChildrenProps> = ({ children }) => {
  const isAuth = useContainer(CheckIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth/login", { replace: true });
    }
  }, [isAuth, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
