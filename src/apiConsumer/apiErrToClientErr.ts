import { ErrorCode } from "../shared";
import { CLIENT_ERR_CODES, ENDPOINTS } from "../utils/CONST";
import { HttpClientError, isHttpClientError } from "./client";

const apiErrToClientErr = (err: HttpClientError | null) => {
  if (!err) {
    return null;
  }

  if (!isHttpClientError(err)) {
    return CLIENT_ERR_CODES.GENERIC_ERROR;
  }

  if (err.isUnexpected) {
    if (err.errorBody.isNotionErr) {
      return CLIENT_ERR_CODES.DB_ISSUE;
    }

    return CLIENT_ERR_CODES.GENERIC_ERROR;
  }

  if (err.isBackEndErr) {
    return CLIENT_ERR_CODES.BE_CONNECTION_ISSUE;
  }

  const errMapping = {
    [ErrorCode.GENERIC_ERROR]: CLIENT_ERR_CODES.GENERIC_ERROR,
    [ErrorCode.USER_NOT_FOUND]: CLIENT_ERR_CODES.INVALID_USER_TOKEN,
    [ErrorCode.BILL_NOT_FOUND]: CLIENT_ERR_CODES.FAILED_BILL_FETCH,

    [ErrorCode.MISSING_BODY]: CLIENT_ERR_CODES.UPDATE_CONSUMPTION_CODE_FAILURE,
    [ErrorCode.INVALID_BODY]: CLIENT_ERR_CODES.UPDATE_CONSUMPTION_CODE_FAILURE,

    [ErrorCode.UPDATE_CONSUMPTION_FAILED]:
      CLIENT_ERR_CODES.UPDATE_CONSUMPTION_FAILED,
    [ErrorCode.CONSUMPTION_INDEX_IS_LOWER]:
      CLIENT_ERR_CODES.CONSUMPTION_INDEX_IS_LOWER,
    [ErrorCode.NOT_LATEST_BILL_CONSUMPTION]:
      CLIENT_ERR_CODES.NOT_LATEST_BILL_CONSUMPTION,
  };

  const errorMapped = errMapping[err.errorCode as keyof typeof errMapping];
  if (typeof errorMapped === "string") {
    return errorMapped;
  }

  // The errorCode is intended for bad qs params
  if (
    ![ErrorCode.MISSING_PARAMETER, ErrorCode.INVALID_PARAMETER].includes(
      err.errorCode
    )
  ) {
    return CLIENT_ERR_CODES.GENERIC_ERROR;
  }

  // The only two endpoints that take qs params

  if (err.endpoint.startsWith(ENDPOINTS.GET_USER)) {
    return CLIENT_ERR_CODES.INVALID_USER_TOKEN;
  }

  if (err.endpoint.startsWith(ENDPOINTS.GET_CONSUMPTION)) {
    return CLIENT_ERR_CODES.UPDATE_CONSUMPTION_CODE_FAILURE;
  }

  // Could not match the erroCode for some reason
  return CLIENT_ERR_CODES.GENERIC_ERROR;
};

export default apiErrToClientErr;
