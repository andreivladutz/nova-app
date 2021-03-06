import { Consumption } from "./dbsSchema";

export type UpdateConsumptionBody = {
  indexWC: number;
  indexBathroom: number;
  indexKitchen: number;

  userToken: string;
  billId: number;
  // The notion page id
  consumptionPageId: string;
};

export type ConsumptionResponse = Consumption & {
  consumptionPageId: string;

  prevIndexWC: number;
  prevIndexBathroom: number;
  prevIndexKitchen: number;
};

// When a consumption is updated, it also computes and returns
// the price per cube meter of water for this current bill
export type UpdateConsumptionResponse = ConsumptionResponse & {
  pricePerCubeM: number;
};
