import { Handler } from "@netlify/functions";
import {
  notionCallWithErrHandling,
  server,
  onSuccess,
  handlerError,
  successResult,
  apiErrors,
} from "../utils/backEndUtils";
import { Bill, billKeys } from "../utils/domain/dbsSchema";
import { ErrorCode } from "../utils/domain/errorCode";
import { createDbWrapper } from "../utils/notionApiWrappers";
import notionCreds from "../utils/notionCreds";

const getLatestBill = () => {
  const dbWrapper = createDbWrapper<Bill>(
    notionCreds.token,
    notionCreds.dbId.bills
  );

  return dbWrapper.orderBy(billKeys.dateEmitted).descending().getFirst();
};

const billNotFoundErr = handlerError(
  apiErrors.notFound("Could not get the latest bill", ErrorCode.BILL_NOT_FOUND)
);

const handler: Handler = (event) =>
  server
    .get(event, {})
    .then(onSuccess(() => notionCallWithErrHandling(getLatestBill())))
    .then(
      onSuccess(async (bill) => {
        if (!bill) {
          return billNotFoundErr;
        }

        return successResult(bill);
      })
    )
    .then(server.sendResponse);

export { handler };
