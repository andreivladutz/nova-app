import { User } from "../shared";
import { client } from "./client";

export const getUser = (token: string) => {
  return client.get<User>("/getUser", { token });
};
