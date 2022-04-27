export enum ErrorCode {
  GENERIC_ERROR = 0,
  // The token has not matched any user
  USER_NOT_FOUND = 1,
  // Missing qs param
  MISSING_PARAMETER = 2,
  // Invalid qs param
  INVALID_PARAMETER = 3,
  BILL_NOT_FOUND = 4,
  MISSING_BODY = 5,
  INVALID_BODY = 6,
  UPDATE_CONSUMPTION_FAILED = 7,
  // The entered consumption index is lower than the previous one
  CONSUMPTION_INDEX_IS_LOWER = 8,
  // Edge case where the user might be entering a consumption index
  // for a bill that is not the latest bill available
  NOT_LATEST_BILL_CONSUMPTION = 9,
}
