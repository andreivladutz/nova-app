import {
  Bill,
  ConsumptionResponse,
  UpdateConsumptionBody,
  UpdateConsumptionResponse,
  User,
} from "../shared";
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

export const updateConsumption = (body: UpdateConsumptionBody) => {
  return client.put<UpdateConsumptionResponse, UpdateConsumptionBody>(
    "/updateConsumption",
    body
  );
};
