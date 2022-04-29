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
  errorCode: ErrorCode;
  errorBody: ApiError;

  // e.g. 404
  statusCode: number;

  endpoint: string;
  isUnexpected?: boolean;
  isBackEndErr?: boolean;

  constructor(
    errMsg: string,
    statusCode: number,
    errorBody: ApiError,
    endpoint: string,
    isUnexpected?: boolean
  ) {
    super(errMsg);

    this.statusCode = statusCode;
    this.errorBody = errorBody;
    this.errorCode = errorBody.errorCode;

    this.endpoint = endpoint;
    this.isUnexpected = isUnexpected;
  }
}

const unexpectedHttpErr = (endpoint: string, reason: string) =>
  new HttpClientError(
    "Unexpected error when calling the API",
    0,
    { message: reason, errorCode: ErrorCode.GENERIC_ERROR },
    endpoint,
    true
  );

const backEndConnectionErr = (endpoint: string, reason: string) => {
  const err = new HttpClientError(
    "Back end connection issues",
    0,
    {
      message: reason,
      errorCode: ErrorCode.GENERIC_ERROR,
    },
    endpoint
  );

  err.isBackEndErr = true;

  return err;
};

export const isHttpClientError = (error: any): error is HttpClientError =>
  error instanceof HttpClientError;

// All api calls made are relative to the current netlify domain name
const basePath = `${window.location.origin}/.netlify/functions`;
const url = (endpoint: string) => `${basePath}${endpoint}`;

const throwUnexpected = (endpoint: string, err: unknown) => {
  throw unexpectedHttpErr(
    endpoint,
    `Failed to parse json body when calling to ${endpoint}.\nOriginal err msg = ${
      (err as Error).message
    }`
  );
};

const apiCall = async <R extends object, B extends object>(
  endpoint: string,
  method: HttpVerb,
  body?: B
) => {
  let response: Response;
  try {
    response = await fetch(url(endpoint), {
      method,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch (err) {
    return throwUnexpected(endpoint, (err as Error).message);
  }

  let apiError: ApiError;
  try {
    if (response.ok) {
      return (await response.json()) as Promise<R>;
    }

    apiError = await response.json();
  } catch (err) {
    throw backEndConnectionErr(endpoint, (err as Error).message);
  }

  throw new HttpClientError(
    `Failed with ${response.status} when calling to ${method} ${endpoint}`,
    response.status,
    apiError,
    endpoint
  );
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
