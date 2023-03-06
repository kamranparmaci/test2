import React, { FC } from "react";
import { ChildrenProps } from "./types/root";
import { Container } from "inversify";
import { Provider } from "inversify-react";
import { CheckIsAuthenticated } from "./services/auth-services";
import { Login } from "./services/user-services";

const AppContainer: FC<ChildrenProps> = ({ children }) => {
  const container = new Container();
  container.bind(CheckIsAuthenticated).toSelf();
  container.bind(Login).toSelf();
  return <Provider container={container}>{children}</Provider>;
};

export default AppContainer;
