import { ReactNode } from "react";

export type ChildrenProps = { children: ReactNode };

export type Users = {
  id: number;
  username: string;
  password: string;
  email: string;
};
