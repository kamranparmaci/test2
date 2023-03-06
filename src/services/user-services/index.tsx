import React from "react";
import fakeUsers from "../../assets/data/fakeUsers";
import { Users } from "../../types/root";

const UserServices = () => {
  const userExists = (
    enteredUsername: string,
    enteredPassword: string
  ): boolean => {
    return !!fakeUsers.find(
      (user) =>
        user.password === enteredPassword && user.username === enteredUsername
    );
  };

  const login = (username: string, password: string) => {
    const isExists = userExists(username, password);

    if (isExists) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
  };

  return { login };
};

export default UserServices;
