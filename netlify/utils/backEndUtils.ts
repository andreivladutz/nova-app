import { Response } from "@netlify/functions/dist/function/response";
import { isNotionClientError } from "@notionhq/client";
import { PromiseParam } from "./types/utilitary";

type ApiError = {
  isNotionErr?: boolean;
  message: string;
};

const makeErrResponse = (statusCode: number, errObj: ApiError): Response => ({
  statusCode,
  body: JSON.stringify(errObj),
});

export const apiErrors = {
  badRequest: (message: string) => makeErrResponse(400, { message }),
  serverError: (message: string, isNotionErr?: boolean) =>
    makeErrResponse(500, { message, isNotionErr }),
};

type ResultOrHandlerErr<R, E> =
  | {
      success: true;
      result: R;
    }
  | {
      success: false;
      error: E;
    };

const handlerError = <E>(error: E) =>
  ({
    success: false,
    error,
  } as const);

const successResult = <R>(result: R) =>
  ({
    success: true,
    result,
  } as const);

export const notionCallWithErrHandling = async <P extends Promise<any>>(
  callPromise: P
): Promise<ResultOrHandlerErr<PromiseParam<P>, Response>> => {
  try {
    return successResult(await callPromise);
  } catch (error) {
    if (isNotionClientError(error)) {
      // TODO: Handle some notion errs

      console.log(error.message);
      return handlerError(apiErrors.serverError(error.message, true));
    }

    console.log((error as Error).message);
    return handlerError(apiErrors.serverError(error.message));
  }
};
