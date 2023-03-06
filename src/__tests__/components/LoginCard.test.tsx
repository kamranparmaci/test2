import { render, screen } from "@testing-library/react";
import LoginCard from "../../components/common/login-card";

const setup = () => {
  const Children = () => <div>this is children component</div>;
  render(
    <LoginCard>
      <Children />
    </LoginCard>
  );
  const cardTitle = screen.getByText(/welcome to my app/i);
  const logo = screen.getByAltText(/app-logo/i);

  return {
    cardTitle,
    logo,
  };
};

describe("login card", () => {
  test("rendered title of the card", () => {
    const { cardTitle } = setup();

    expect(cardTitle).toBeInTheDocument();
  });

  test("rendered logo of the card", () => {
    const { logo } = setup();

    expect(logo).toBeInTheDocument();
  });

  test("logo must has height = 100px and with = 100px", () => {
    const { logo } = setup();

    expect(logo).toHaveStyle("height:100px;width:100px");
  });

  test("rendered children in login card", () => {
    const Children = () => <div>this is children component</div>;

    render(
      <LoginCard>
        <Children />
      </LoginCard>
    );
  });
});
