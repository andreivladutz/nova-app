export type Consumption = {
  name: string;
  indexWC: number;
  indexBathroom: number;
  indexKitchen: number;
  date: string;
  confirmed: boolean;
  total: number;
  consumptionCubeM: number;
  // External key to Users
  apartmentNo: number;
  // External key to Bills
  billId: number;
};

export type User = {
  name: string;
  token: string;
  apartmentNo: number;
  url: string;
};

export type Bill = {
  name: string;
  dateEmitted: string;
  dueDate: string;
  total: number;
  penalties: number;
  file: string;
  billId: number;
  waterConsumption: number;
};

const keysArrayToMap = <T extends object>(keysArr: readonly (keyof T)[]) =>
  keysArr.reduce(
    (prev, key) => ({ ...prev, [key]: key }),
    {} as {
      [K in keyof T]: K;
    }
  );

export const consumptionKeys = keysArrayToMap<Consumption>([
  "indexWC",
  "indexBathroom",
  "indexKitchen",
  "date",
  "confirmed",
  "total",
  "apartmentNo",
  "billId",
  "consumptionCubeM",
] as const);

export const userKeys = keysArrayToMap<User>([
  "name",
  "apartmentNo",
  "token",
  "url",
] as const);

export const billKeys = keysArrayToMap<Bill>([
  "name",
  "dateEmitted",
  "dueDate",
  "total",
  "penalties",
  "file",
  "billId",
  "waterConsumption",
] as const);
