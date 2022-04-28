export enum ROUTES {
  HOMEPAGE = "/",
  WATER_CONSUMPTION = "/water-consumption",

  PLASMIC_HOST = "/plasmic-host",
}

// The qs params' names used by the app
export const QS_PARAMS = {
  USER_TOKEN: "token",
};

export const QUERY_KEYS = {
  USER: "user",
  BILL: "latestBill",
  CONSUMPTION: "consumption",
};

// Mapping api ErrorCode(s) to client side errors
export enum CLIENT_ERR_CODES {
  GENERIC_ERROR = "GENERIC_ERROR",
  // The token is not present either in the qs or the localStorage
  MISSING_USER_TOKEN = "MISSING_USER_TOKEN",
  // The token does not correspond to a real user in the notion db
  // Can be - missing param, invalid param,  user not found
  INVALID_USER_TOKEN = "INVALID_USER_TOKEN",
}

export const ERRORS_LOCALIZED = {
  [CLIENT_ERR_CODES.GENERIC_ERROR]:
    "A apărut o eroare neașteptată. Încercați din nou după reîncărcarea paginii!",
  [CLIENT_ERR_CODES.MISSING_USER_TOKEN]:
    "Token-ul de identificare este inexistent",
  [CLIENT_ERR_CODES.INVALID_USER_TOKEN]:
    "Token-ul de identificare este invalid",
};

export const STYLING = {
  SKELETONS: {
    BASE_COLOR: "var(--plasmic-token-base-color)",
    HIGHLIGHT_COLOR: "#bbc4c9",
  },
  SKELETON_PRIMARY_COLOR: {
    baseColor: "var(--plasmic-token-bg-color)",
    highlightColor: "var(--plasmic-token-primary-color)",
  },
};
