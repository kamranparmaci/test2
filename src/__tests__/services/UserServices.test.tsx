import React from "react";
import UserServices from "../../services/user-services";
import { Users } from "../../types/root";

const fakeUser: Users[] = [
  {
    id: 1,
    username: "mark",
    password: "12345678",
    email: "mark@example.com",
  },
  {
    id: 2,
    username: "mike",
    password: "87654321",
    email: "mike@example.com",
  },
];

test("mock the login process", () => {
  const mockLogin = jest.fn(
    (users: Users[], enteredPassword: string, enteredUsername: string) =>
      users.find(
        (user) =>
          user.password === enteredPassword && user.username === enteredUsername
      )
  );
  const Login = (username: string, password: string) => {
    const userLoggedIn = mockLogin(fakeUser, password, username);
    return userLoggedIn;
  };

  expect(Login("mike", "87654321")).toEqual({
    id: 2,
    username: "mike",
    password: "87654321",
    email: "mike@example.com",
  });
});
