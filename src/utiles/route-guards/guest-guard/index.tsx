import React, { FC, useEffect } from "react";
import { useContainer } from "inversify-react";
import { useNavigate } from "react-router-dom";
import { ChildrenProps } from "../../../types/root";
import { UserServices } from "../../../services/user-services";

const GuestGuard: FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated } = useContainer(UserServices);
  const isAuth = isAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuth, navigate]);
  return <>{children}</>;
};

export default GuestGuard;
