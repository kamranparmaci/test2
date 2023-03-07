import React from "react";
import { render } from "@testing-library/react";
import UserList from "../../components/common/user-list";

describe("UserList component", () => {
  const user = {
    id: 1,
    username: "john doe",
    password: "1324252627",
    email: "johndoe@example.com",
    avatar: "https://avatar.com/150",
  };

  it("renders user details correctly", () => {
    const { getByText, getByAltText } = render(<UserList user={user} />);

    expect(getByText(user.username)).toBeInTheDocument();
    expect(getByText(user.email)).toBeInTheDocument();
    expect(getByAltText(user.username)).toBeInTheDocument();
  });
});
