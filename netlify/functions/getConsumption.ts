import { Handler } from "@netlify/functions";
import notionCreds from "../utils/notionCreds";

import { createDbWrapper } from "../utils/notionApiWrappers";
import { filter } from "../utils/notionUtils/filter";
import { Consumption, consumptionKeys } from "../utils/domain/dbsSchema";
import {
  notionCallWithErrHandling,
  onSuccess,
  QsParamsType,
  server,
  successResult,
} from "../utils/backEndUtils";
import { toIsoString } from "../utils/notionUtils/toIsoString";
import { getUser, userNotFoundErr } from "./getUser";

async function getConsumption(billId: number, userToken: string) {
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

  // Warning: A user with a token can create an infinite number
  // of consumptions by generating random bill ids
  return dbWrapper.create({
    name: `Ap-${user.apartmentNo}-bill-${billId}`,
    indexWC: 0,
    indexBathroom: 0,
    indexKitchen: 0,
    date: toIsoString(new Date()),
    confirmed: false,
    total: 0,
    // External key to Users
    apartmentNo: user.apartmentNo,
    // External key to Bills
    billId,
  });

  // consumptionObj.indexBathroom = 0;
  // consumptionObj.indexWC = 0;
  // consumptionObj.indexKitchen = 0;

  // return dbWrapper.update(consumptionObj);
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
        // The only time we won't be able to get the consumption
        // is when we actually cannot get the user
        // (otherwise a consumption wil be created)
        if (!consumption) {
          return userNotFoundErr;
        }

        return successResult(consumption);
      })
    )
    .then(server.sendResponse);

export { handler };
