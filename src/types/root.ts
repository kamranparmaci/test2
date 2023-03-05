import { ReactNode } from "react";

export type ChildrenProps = { children: ReactNode };

export type Users = {
  id: string;
  username: string;
  password: string;
  email: string;
};
