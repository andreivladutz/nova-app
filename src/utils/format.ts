import { UNITS_LOCALIZED, UnitType } from "./CONST";

export const formatMetric = (
  value: number | string | undefined,
  unitType: UnitType
) =>
  typeof value !== "undefined"
    ? `${value} ${UNITS_LOCALIZED[unitType]}`
    : value;
