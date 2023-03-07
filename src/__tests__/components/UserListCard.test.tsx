import { render } from "@testing-library/react";
import UserListCard from "../../components/common/users-card";

test("rendered children in card", () => {
  const { getByText } = render(
    <UserListCard>
      <div>this is for test</div>
    </UserListCard>
  );

  expect(getByText(/this is for test/i)).toBeInTheDocument();
});
