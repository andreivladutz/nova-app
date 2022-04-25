import { Handler } from "@netlify/functions";
import notionCreds from "../utils/notionCreds";

import { createDbWrapper } from "../utils/notionApiWrappers";
import { filter } from "../utils/notionUtils/filter";
import { Consumption, consumptionKeys } from "../utils/domain/dbsSchema";
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
import { ErrorCode } from "../utils/domain/errorCode";
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

  return await dbWrapper
    .filter(filter(consumptionKeys.billId).number.equals(billId))
    .getFirst();

  // consumptionObj.indexBathroom = 0;
  // consumptionObj.indexWC = 0;
  // consumptionObj.indexKitchen = 0;

  // return dbWrapper.update(consumptionObj);

  // return dbWrapper.create({
  //   name: "foo test",
  //   indexWC: 1234,
  //   indexBathroom: 1345,
  //   indexKitchen: 1345,
  //   date: toIsoString(new Date()),
  //   confirmed: false,
  //   total: 100,
  //   // External key to Users
  //   apartmentNo: 3,
  //   // External key to Bills
  //   billId,
  // });
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
      onSuccess(async ({ billId, token }) =>
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
