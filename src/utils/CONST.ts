export enum ROUTES {
  HOMEPAGE = "/",
  WATER_CONSUMPTION = "/water-consumption",

  PLASMIC_HOST = "/plasmic-host",
}

export const ENDPOINTS = {
  GET_USER: "/getUser",
  GET_CONSUMPTION: "/getConsumption",
  GET_LATEST_BILL: "/getLatestBill",
  UPDATE_CONSUMPTION: "/updateConsumption",
};

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
  FAILED_BILL_FETCH = "FAILED_BILL_FETCH",
  UPDATE_CONSUMPTION_FAILED = "UPDATE_CONSUMPTION_FAILED",
  UPDATE_CONSUMPTION_CODE_FAILURE = "UPDATE_CONSUMPTION_CODE_FAILURE",

  FAILED_CONSUMPTION_FETCH = "FAILED_CONSUMPTION_FETCH",

  // THESE TWO MAP PERFECTLY TO THE API ERRORCODE
  CONSUMPTION_INDEX_IS_LOWER = "CONSUMPTION_INDEX_IS_LOWER",
  NOT_LATEST_BILL_CONSUMPTION = "NOT_LATEST_BILL_CONSUMPTION",

  DB_ISSUE = "DB_ISSUE",
  BE_CONNECTION_ISSUE = "BE_CONNECTION_ISSUE",
}

export const ERRORS_LOCALIZED = {
  [CLIENT_ERR_CODES.GENERIC_ERROR]:
    "A apărut o eroare neașteptată. Încercați din nou după reîncărcarea paginii!",
  [CLIENT_ERR_CODES.MISSING_USER_TOKEN]:
    "Token-ul de identificare este inexistent",
  [CLIENT_ERR_CODES.INVALID_USER_TOKEN]:
    "Token-ul de identificare este invalid",
  [CLIENT_ERR_CODES.FAILED_BILL_FETCH]: "Nu s-a putut obține ultima factură",
  [CLIENT_ERR_CODES.UPDATE_CONSUMPTION_FAILED]:
    "Nu s-a putut actualiza consumul. Încercați din nou după reîncărcarea paginii!",
  [CLIENT_ERR_CODES.UPDATE_CONSUMPTION_CODE_FAILURE]:
    "Eroare internă: Nu s-a putut actualiza consumul.",
  [CLIENT_ERR_CODES.FAILED_CONSUMPTION_FETCH]:
    "Nu s-a putut obține cel mai recent consum. Reîncercați mai târziu",
  [CLIENT_ERR_CODES.CONSUMPTION_INDEX_IS_LOWER]:
    "Indexul nu poate fi mai mic decât ultimul index înregistrat.",
  [CLIENT_ERR_CODES.NOT_LATEST_BILL_CONSUMPTION]:
    "Consumul introdus nu este pentru cea mai recentă factură. Reîncărcați pagina!",
  [CLIENT_ERR_CODES.DB_ISSUE]:
    "Eroare internă: baza de date nu a putut fi accesată! Reîncercați mai târziu!",
  [CLIENT_ERR_CODES.BE_CONNECTION_ISSUE]:
    "Nu se poate contacta server-ul. Sigur aveți conexiune la internet?",
} as const;

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
