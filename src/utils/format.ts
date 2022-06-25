import { UNITS_LOCALIZED, UnitType } from "./CONST";

export const formatNumber = (value: number | string, unitType: UnitType) => {
  switch (unitType) {
    // Formats monetary values if numbers
    case UnitType.Ron:
      if (typeof value === "number") {
        return value.toFixed(2);
      }

      return value;
    // Default to no formatting
    default:
      return value;
  }
};

export const formatMetric = (
  value: number | string | undefined,
  unitType: UnitType
) =>
  typeof value !== "undefined"
    ? `${formatNumber(value, unitType)} ${UNITS_LOCALIZED[unitType]}`
    : value;
