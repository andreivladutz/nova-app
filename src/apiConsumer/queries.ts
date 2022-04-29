import {
  Bill,
  ConsumptionResponse,
  UpdateConsumptionBody,
  UpdateConsumptionResponse,
  User,
} from "../shared";
import { ENDPOINTS } from "../utils/CONST";
import { client } from "./client";

export const getUser = (token: string) => {
  return client.get<User>(ENDPOINTS.GET_USER, { token });
};

export const getLatestBill = () => {
  return client.get<Bill>(ENDPOINTS.GET_LATEST_BILL);
};

export const getConsumption = (billId: number, token: string) => {
  return client.get<ConsumptionResponse>(ENDPOINTS.GET_CONSUMPTION, {
    billId: billId.toString(),
    token,
  });
};

export const updateConsumption = (body: UpdateConsumptionBody) => {
  return client.put<UpdateConsumptionResponse, UpdateConsumptionBody>(
    ENDPOINTS.UPDATE_CONSUMPTION,
    body
  );
};
