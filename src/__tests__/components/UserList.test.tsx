import React from "react";
import { render } from "@testing-library/react";
import UserList from "../../components/common/user-list";
import { Users } from "../../types/root";

describe("UserList component", () => {
  const user: Users = {
    id: 1,
    username: "john doe",
    password: "1324252627",
    email: "johndoe@example.com",
    avatar: "https://avatar.com/150",
    description: "some description",
  };

  it("renders user details correctly", () => {
    const { getByText, getByAltText } = render(<UserList user={user} />);

    expect(getByText(user.username)).toBeInTheDocument();
    expect(getByText(user.email)).toBeInTheDocument();
    expect(getByAltText(user.username)).toBeInTheDocument();
  });
});
