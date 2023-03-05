import React, { useState, FC } from "react";
import { ChildrenProps } from "./types/root";
import { Container } from "inversify";
import { Provider } from "inversify-react";
import AuthServices from "./services/auth-services";

const AppContainer: FC<ChildrenProps> = ({ children }) => {
  const container = new Container();
  container.bind(AuthServices).toSelf();
  return <Provider container={container}>{children}</Provider>;
};

export default AppContainer;
