import { ApiError, ErrorCode } from "../shared";

// All the possible used http verbs for this app
export enum HttpVerb {
  get = "GET",
  post = "POST",
  put = "PUT",
}

// Make a custom error class which can be used to identify the http errors
// "thrown" or returned by the useQuery hook of react-query
export class HttpClientError extends Error {
  errorCode: number;
  errorBody: ApiError;
  isUnexpected?: boolean;

  constructor(
    errMsg: string,
    errorCode: number,
    errorBody: ApiError,
    isUnexpected?: boolean
  ) {
    super(errMsg);

    this.errorCode = errorCode;
    this.errorBody = errorBody;
    this.isUnexpected = isUnexpected;
  }
}

const unexpectedHttpErr = (reason: string) =>
  new HttpClientError(
    "Unexpected error when calling the API",
    0,
    { message: reason, errorCode: ErrorCode.GENERIC_ERROR },
    true
  );

export const isHttpClientError = (error: any): error is HttpClientError =>
  error instanceof HttpClientError;

// All api calls made are relative to the current netlify domain name
const basePath = `${window.location.origin}/.netlify/functions`;
const url = (endpoint: string) => `${basePath}${endpoint}`;

const apiCall = async <R extends object, B extends object>(
  endpoint: string,
  method: HttpVerb,
  body?: B
) => {
  try {
    const response = await fetch(url(endpoint), {
      method,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (response.ok) {
      return response.json() as Promise<R>;
    }

    throw new HttpClientError(
      `Failed with ${response.status} when calling to ${method} ${endpoint}`,
      response.status,
      await response.json()
    );
  } catch (err) {
    throw unexpectedHttpErr(
      `Failed to parse json body when calling to ${endpoint}.\nOriginal err msg = ${
        (err as Error).message
      }`
    );
  }
};

export const client = {
  get: <R extends object>(
    endpoint: string,
    queryStringParams?: Record<string, string>
  ) =>
    apiCall<R, {}>(
      `${endpoint}${
        queryStringParams
          ? `?${new URLSearchParams(queryStringParams).toString()}`
          : ""
      }`,
      HttpVerb.get
    ),
  put: <R extends object, B extends object>(endpoint: string, body: B) =>
    apiCall<R, B>(endpoint, HttpVerb.put, body),
};
