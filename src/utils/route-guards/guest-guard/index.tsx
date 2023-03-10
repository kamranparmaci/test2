import React, { FC, useEffect } from "react";
import { useContainer } from "inversify-react";
import { useNavigate } from "react-router-dom";
import { ChildrenProps } from "../../../types/root";
import { IsUserAuth } from "../../../services/user-services";

const GuestGuard: FC<ChildrenProps> = ({ children }) => {
  const { isAuth } = useContainer(IsUserAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuth, navigate]);
  return <>{children}</>;
};

export default GuestGuard;
