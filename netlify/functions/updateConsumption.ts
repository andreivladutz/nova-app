import { Handler } from "@netlify/functions";
import {
  notionCallWithErrHandling,
  server,
  onSuccess,
  handlerError,
  successResult,
  apiErrors,
} from "../utils/backEndUtils";
import {
  UpdateConsumptionBody,
  Consumption,
  ErrorCode,
  UpdateConsumptionResponse,
  User,
} from "../utils/sharedDomain";
import { createDbWrapper } from "../utils/notionApiWrappers";
import notionCreds from "../utils/notionCreds";
import {
  getConsumption,
  mergeWithPrevIndexVals,
  PrevIndexVals,
} from "./getConsumption";
import { toIsoString } from "../utils/notionUtils/toIsoString";
import { getLatestBill } from "./getLatestBill";
import { NotionAcessPrototype } from "../utils/notionUtils/notionPage";

const updateConsumption = async (updateBody: UpdateConsumptionBody) => {
  const dbWrapper = createDbWrapper<Consumption>(
    notionCreds.token,
    notionCreds.dbId.consumptions
  );

  const { billId, userToken, consumptionPageId } = updateBody;

  const consumptionResult = await getConsumption(billId, userToken, false);
  if (!consumptionResult || !Array.isArray(consumptionResult)) {
    return null;
  }

  // The getting of the consumption might fail if the user is not found
  // or if the consumption itself is not found (we do not create one instead)
  const [consumptionObj, prevIndexVals, user] = consumptionResult as readonly [
    (Consumption & NotionAcessPrototype) | null,
    PrevIndexVals,
    User
  ];
  if (!consumptionObj) {
    return null;
  }

  // Just sanity check if the fetched consumption
  // is the same with the one the client has
  if (consumptionObj.$notion.pageId !== consumptionPageId) {
    console.log(
      "The client has passed a different consumptionPageId then the one fetched"
    );
    return null;
  }

  const { indexBathroom, indexWC, indexKitchen } = updateBody;

  const latestBill = await getLatestBill();

  if (!latestBill) {
    console.log(`We could not fetch the latest bill with billId = ${billId}`);
    return null;
  }

  if (latestBill.billId !== billId) {
    console.log("The user is trying to update an earlier bill");
    console.log(
      `Latest billId = ${latestBill.billId} and the user billId = ${billId}`
    );

    return ErrorCode.NOT_LATEST_BILL_CONSUMPTION;
  }

  const deltaBathroom = indexBathroom - prevIndexVals.prevIndexBathroom;
  const deltaKitchen = indexKitchen - prevIndexVals.prevIndexKitchen;
  const deltaWC = indexWC - prevIndexVals.prevIndexWC;

  // Verify if the entered idx is valid,
  // i.e. it is not lower than the previously
  // entered consumption index
  if (deltaBathroom < 0 || deltaKitchen < 0 || deltaWC < 0) {
    return ErrorCode.CONSUMPTION_INDEX_IS_LOWER;
  }

  const { total, waterConsumption, existingBalance } = latestBill;
  // Only if needed, the cubeM price will be based on the whole bill total
  const totalBillPrice = user?.usesFullBillPrice
    ? total + existingBalance
    : total;
  const pricePerCubeM = totalBillPrice / waterConsumption;
  const consumptionCubeM = deltaBathroom + deltaKitchen + deltaWC;

  consumptionObj.indexBathroom = indexBathroom;
  consumptionObj.indexWC = indexWC;
  consumptionObj.indexKitchen = indexKitchen;

  consumptionObj.consumptionCubeM = consumptionCubeM;
  consumptionObj.total = pricePerCubeM * consumptionCubeM;

  // Also update the date to reflect the latest update time
  consumptionObj.date = toIsoString(new Date());
  // Mark that the consumption has been updated at least once
  consumptionObj.hasUpdated = true;

  const updatedConsumption = await dbWrapper.update(consumptionObj);

  if (!updatedConsumption) {
    return null;
  }

  const mergedUpdated = mergeWithPrevIndexVals([
    updatedConsumption,
    prevIndexVals,
    user,
  ]) as Consumption as UpdateConsumptionResponse;

  mergedUpdated.pricePerCubeM = pricePerCubeM;
  return mergedUpdated;
};

export const updateConsumptionErr = (code: ErrorCode): [string, ErrorCode] => {
  switch (code) {
    case ErrorCode.UPDATE_CONSUMPTION_FAILED:
      return ["Could not update the consumption", code];
    case ErrorCode.INVALID_BODY:
      return ["Invalid update body schema for consumption!", code];
    case ErrorCode.NOT_LATEST_BILL_CONSUMPTION:
      return ["This consumption is not for the latest bill available", code];
    case ErrorCode.CONSUMPTION_INDEX_IS_LOWER:
      return [
        "The update index is lower than the previously entered one(s)",
        code,
      ];
    default:
      return ["Unexpected error", code];
  }
};

const updateFailedErr = handlerError(
  apiErrors.notFound(
    ...updateConsumptionErr(ErrorCode.UPDATE_CONSUMPTION_FAILED)
  )
);

const handler: Handler = (event) =>
  server
    .put<UpdateConsumptionBody>(event)
    // Validate the corectness of the update body
    .then(
      onSuccess(async (updateBody) => {
        const validationSchema: {
          [K in keyof UpdateConsumptionBody]: "number" | "string";
        } = {
          indexWC: "number",
          indexBathroom: "number",
          indexKitchen: "number",
          userToken: "string",
          consumptionPageId: "string",
          billId: "number",
        };

        for (const [propName, expectedType] of Object.entries(
          validationSchema
        )) {
          if (typeof updateBody[propName] !== expectedType) {
            return handlerError(
              apiErrors.badRequest(
                ...updateConsumptionErr(ErrorCode.INVALID_BODY)
              )
            );
          }
        }

        return successResult(updateBody);
      })
    )
    .then(
      onSuccess((updateBody) =>
        notionCallWithErrHandling(updateConsumption(updateBody))
      )
    )
    .then(
      onSuccess(async (consumption) => {
        // The update index is lower than the previously entered one(s)
        // Or the user is trying to update the consumption for an earlier bill
        if (typeof consumption === "number") {
          return handlerError(
            apiErrors.badRequest(
              // an ErrorCode has beeen returned by the update fn
              ...updateConsumptionErr(consumption)
            )
          );
        }

        if (!consumption) {
          return updateFailedErr;
        }

        return successResult(consumption);
      })
    )
    .then(server.sendResponse);

export { handler };
