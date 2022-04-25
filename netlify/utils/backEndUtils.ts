import { Handler } from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
import { Event } from "@netlify/functions/dist/function/event";
import { isNotionClientError } from "@notionhq/client";
import { PromiseParam } from "./types/utilitary";
import { ErrorCode } from "./domain/errorCode";

// Used on the FE by the consuming client
export type ApiError = {
  isNotionErr?: boolean;
  errorCode: ErrorCode;
  message: string;
};

const makeErrResponse = (statusCode: number, errObj: ApiError): Response => ({
  statusCode,
  body: JSON.stringify(errObj),
});

export const apiErrors = {
  badRequest: (message: string, errorCode: ErrorCode) =>
    makeErrResponse(400, { message, errorCode }),
  notFound: (message: string, errorCode: ErrorCode) =>
    makeErrResponse(404, { message, errorCode }),
  serverError: (message: string, errorCode: ErrorCode, isNotionErr?: boolean) =>
    makeErrResponse(500, { message, isNotionErr, errorCode }),
};

export const onSuccess =
  <R, E, NewResult, NewError>(
    continuation: (
      result: R
    ) => Promise<ResultOrHandlerErr<NewResult, NewError>>
  ) =>
  (
    resultOrErr: ResultOrHandlerErr<R, E>
  ): Promise<ResultOrHandlerErr<NewResult, E | NewError>> => {
    if (!resultOrErr.success) {
      return Promise.resolve(resultOrErr);
    }

    return continuation(resultOrErr.result);
  };

type Success<R> = {
  success: true;
  result: R;
};
type Failure<E> = {
  success: false;
  error: E;
};
type ResultOrHandlerErr<R, E> = Success<R> | Failure<E>;

export const handlerError = <E>(error: E) =>
  ({
    success: false,
    error,
  } as Failure<E>);

export const successResult = <R>(result: R) =>
  ({
    success: true,
    result,
  } as Success<R>);

export const notionCallWithErrHandling = async <P extends Promise<any>>(
  callPromise: P
): Promise<ResultOrHandlerErr<PromiseParam<P>, Response>> => {
  try {
    return successResult(await callPromise);
  } catch (error) {
    if (isNotionClientError(error)) {
      // TODO: Handle some notion errs

      console.log(error.message);
      return handlerError(
        apiErrors.serverError(error.message, ErrorCode.GENERIC_ERROR, true)
      );
    }

    console.log((error as Error).message);
    return handlerError(
      apiErrors.serverError((error as Error).message, ErrorCode.GENERIC_ERROR)
    );
  }
};

export enum QsParamsType {
  number = "number",
  string = "string",
}
type WithQsParams = {
  [ParamName: string]: {
    type: QsParamsType;
    requiredErr: string;
    invalidErr: string;
  };
};

type ParsedQsParams<T extends WithQsParams> = {
  [ParamName in keyof T]: T[ParamName]["type"] extends QsParamsType.number
    ? number
    : T[ParamName]["type"] extends QsParamsType.string
    ? string
    : never;
};

type EventQueryStringParameters = NonNullable<Event["queryStringParameters"]>;

const parseQsParam = <T extends WithQsParams, K extends keyof T>(
  qs: EventQueryStringParameters | null,
  withQsParams: T,
  paramName: K
): ResultOrHandlerErr<ParsedQsParams<T>[K], Response> => {
  const { type, invalidErr, requiredErr } = withQsParams[paramName];
  const qsParam = qs && qs[paramName as string];

  // If the query string parameter does not even exist
  // then return a badRequest response with the requiredErr message
  if (!qsParam) {
    return handlerError(
      apiErrors.badRequest(requiredErr, ErrorCode.MISSING_PARAMETER)
    );
  }

  const parsedQsParam = (() => {
    switch (type) {
      case QsParamsType.number:
        const parsed = parseInt(qsParam);

        if (Number.isNaN(parsed)) {
          return null;
        }

        return parsed;
      case QsParamsType.string:
        return qsParam;
      default:
        return null;
    }
  })();

  if (parsedQsParam === null) {
    return handlerError(
      apiErrors.badRequest(invalidErr, ErrorCode.INVALID_PARAMETER)
    );
  }

  return successResult(parsedQsParam as ParsedQsParams<T>[K]);
};

const parseQsParameters = <T extends WithQsParams>(
  event: Parameters<Handler>[0],
  withQsParams: T
) => {
  const { queryStringParameters } = event;
  const parsedQsParams = {} as ParsedQsParams<T>;

  for (const paramName of Object.keys(withQsParams) as (keyof T)[]) {
    const paramParseRes = parseQsParam(
      queryStringParameters,
      withQsParams,
      paramName
    );

    if (!paramParseRes.success) {
      return paramParseRes;
    }

    const { result } = paramParseRes;
    parsedQsParams[paramName] = result;
  }

  return successResult(parsedQsParams);
};

const getHandler = <T extends WithQsParams>(
  event: Parameters<Handler>[0],
  withQsParams: T
): Promise<ResultOrHandlerErr<ParsedQsParams<T>, Response>> =>
  Promise.resolve(parseQsParameters(event, withQsParams));

export const server = {
  get: getHandler,

  sendResponse: async <R, E>(resultOrError: ResultOrHandlerErr<R, E>) => {
    if (!resultOrError.success) {
      return resultOrError.error;
    }

    return {
      statusCode: 200,
      body: JSON.stringify(resultOrError.result),
    };
  },
};
