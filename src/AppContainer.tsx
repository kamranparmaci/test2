import React, { FC } from "react";
import { ChildrenProps } from "./types/root";
import { Container } from "inversify";
import { Provider } from "inversify-react";
import "reflect-metadata";
import { UserLogin, IsUserAuth } from "./services/user-services";

const AppContainer: FC<ChildrenProps> = ({ children }) => {
  const container = new Container();
  container.bind(UserLogin).toSelf();
  container.bind(IsUserAuth).toSelf();
  return <Provider container={container}>{children}</Provider>;
};

export default AppContainer;
