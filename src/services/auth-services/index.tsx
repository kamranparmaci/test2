import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthServices = () => {
  const checkIsAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const authNavigation = () => {
    const navigate = useNavigate();

    const isAuth = checkIsAuthenticated();

    useEffect(() => {
      if (!isAuth) {
        navigate("/auth/login", { replace: true });
      }
    }, [isAuth]);
  };

  return { checkIsAuthenticated, authNavigation };
};

export default AuthServices;
