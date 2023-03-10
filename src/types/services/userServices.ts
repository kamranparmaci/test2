import { Users } from "./../root";
export interface UserLogin {
  login: (username: string, password: string) => void;
}
