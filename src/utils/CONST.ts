export enum ROUTES {
  HOMEPAGE = "/",
  WATER_CONSUMPTION = "/water-consumption",

  PLASMIC_HOST = "/plasmic-host",
}

// The qs params' names used by the app
export const QS_PARAMS = {
  USER_TOKEN: "token",
};

export enum CLIENT_ERR_CODES {
  // The token is not present either in the qs or the localStorage
  MISSING_USER_TOKEN = "MISSING_USER_TOKEN",
  // The token does not correspond to a real user in the notion db
  INVALID_USER_TOKEN = "INVALID_USER_TOKEN",
}

export const ERRORS_LOCALIZED = {
  [CLIENT_ERR_CODES.MISSING_USER_TOKEN]:
    "Token-ul de identificare este inexistent",
  [CLIENT_ERR_CODES.INVALID_USER_TOKEN]:
    "Token-ul de identificare este invalid",
};
