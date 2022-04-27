import { Handler } from "@netlify/functions";
import notionCreds from "../utils/notionCreds";

import { createDbWrapper } from "../utils/notionApiWrappers";
import { filter } from "../utils/notionUtils/filter";
import { Consumption, consumptionKeys, ErrorCode } from "../utils/sharedDomain";
import {
  apiErrors,
  handlerError,
  notionCallWithErrHandling,
  onSuccess,
  QsParamsType,
  server,
  successResult,
} from "../utils/backEndUtils";
import { toIsoString } from "../utils/notionUtils/toIsoString";
import { getUser, userNotFoundErr } from "./getUser";
import { ConsumptionResponse } from "../utils/sharedDomain";
import getPreviousConsumption from "../utils/notionAccess/getPreviousConsumption";
import { getLatestBill } from "./getLatestBill";
import { updateConsumptionErr } from "./updateConsumption";

export async function getConsumption(
  billId: number,
  userToken: string,
  createsIfNotFound = true
) {
  const user = await getUser(userToken);

  if (!user) {
    return null;
  }

  const dbWrapper = createDbWrapper<Consumption>(
    notionCreds.token,
    notionCreds.dbId.consumptions
  );

  // All the consumptions, for all users, for the current bill
  // Prefer to filter-fetch by bill id, as there can only be n consumptions
  // for one billId where n is the number of existing users
  const billConsumptions = await dbWrapper
    .filter(filter(consumptionKeys.billId).number.equals(billId))
    .getN();

  // The consumption for this user, if found
  const userConsumption = billConsumptions.find(
    (consumption) => consumption.apartmentNo === user.apartmentNo
  );

  if (userConsumption) {
    return userConsumption;
  }

  // By default, if a consumption does not exist
  // for the current user and the billId, a new consumption is created
  if (!createsIfNotFound) {
    return null;
  }

  // Make sure a consumption is always created for the latest bill
  const latestBill = await getLatestBill();

  if (!latestBill) {
    console.log(`We could not fetch the latest bill with billId = ${billId}`);
    return null;
  }

  if (latestBill.billId !== billId) {
    console.log(
      "The user is trying to create a consumption for an earlier bill"
    );
    console.log(
      `Latest billId = ${latestBill.billId} and the user billId = ${billId}`
    );

    return ErrorCode.NOT_LATEST_BILL_CONSUMPTION;
  }

  const prevConsumption = await getPreviousConsumption(billId, userToken);
  const {
    indexWC = 0,
    indexBathroom = 0,
    indexKitchen = 0,
  } = prevConsumption || {};

  return dbWrapper.create({
    name: `Ap-${user.apartmentNo}-bill-${billId}`,
    indexWC,
    indexBathroom,
    indexKitchen,
    date: toIsoString(new Date()),
    confirmed: false,
    total: 0,
    // External key to Users
    apartmentNo: user.apartmentNo,
    // External key to Bills
    billId,
  });
}

const handler: Handler = (event) =>
  server
    .get(event, {
      billId: {
        type: QsParamsType.number,
        requiredErr: `QS parameter "billId" missing`,
        invalidErr: `QS parameter "billId" malformed`,
      },
      token: {
        type: QsParamsType.string,
        requiredErr: `User identification token missing`,
        invalidErr: `User identification token is invalid`,
      },
    })
    .then(
      onSuccess(({ billId, token }) =>
        notionCallWithErrHandling(getConsumption(billId, token))
      )
    )
    .then(
      onSuccess(async (consumption) => {
        // The user is trying to create a consumption for an earlier bill
        if (typeof consumption === "number") {
          return handlerError(
            apiErrors.badRequest(
              // an ErrorCode has beeen returned by the update fn
              ...updateConsumptionErr(consumption)
            )
          );
        }
        // The only time we won't be able to get the consumption
        // is when we actually cannot get the user
        // (otherwise a consumption wil be created)
        if (!consumption) {
          return userNotFoundErr;
        }

        // Add the notion pageId to the response
        // so the client can reference it in later api calls
        (consumption as Consumption as ConsumptionResponse).consumptionPageId =
          consumption.$notion.pageId;

        return successResult(consumption);
      })
    )
    .then(server.sendResponse);

export { handler };
