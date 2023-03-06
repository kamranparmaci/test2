import React from "react";
import fakeUsers from "../../assets/data/fakeUsers";
import { Users } from "../../types/root";

const Login = () => {
  const loggedInUser = (
    enteredUsername: string,
    enteredPassword: string
  ): Users | undefined => {
    return fakeUsers.find(
      (user) =>
        user.password === enteredPassword && user.username === enteredUsername
    );
  };

  return { loggedInUser };
};

export { Login };
