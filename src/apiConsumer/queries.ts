import { Bill, ConsumptionResponse, User } from "../shared";
import { client } from "./client";

export const getUser = (token: string) => {
  return client.get<User>("/getUser", { token });
};

export const getLatestBill = () => {
  return client.get<Bill>("/getLatestBill");
};

export const getConsumption = (billId: number, token: string) => {
  return client.get<ConsumptionResponse>("/getConsumption", {
    billId: billId.toString(),
    token,
  });
};
