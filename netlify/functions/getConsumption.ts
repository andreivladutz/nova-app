import { Handler } from "@netlify/functions";
import notionCreds from "../utils/notionCreds";

import { createDbWrapper } from "../utils/notionApiWrappers";
import { filter } from "../utils/notionUtils/filter";
import { Consumption, consumptionKeys } from "../utils/domain/dbsSchema";
import { apiErrors } from "../utils/backEndUtils";
import { toIsoString } from "../utils/notionUtils/toIsoString";

async function getConsumption(billId: number) {
  const dbWrapper = createDbWrapper<Consumption>(
    notionCreds.token,
    notionCreds.dbId.consumptions
  );

  try {
    const consumptionObj = await dbWrapper
      .filter(filter(consumptionKeys.billId).number.equals(billId))
      .getFirst();

    consumptionObj.indexBathroom = 0;
    consumptionObj.indexWC = 0;
    consumptionObj.indexKitchen = 0;

    return dbWrapper.update(consumptionObj);

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
  } catch (error) {
    console.error(error.body);
  }
}

const handler: Handler = async (event) => {
  const billId = event.queryStringParameters["billId"];
  const parsedBillId = parseInt(billId);

  if (!billId || Number.isNaN(parsedBillId)) {
    return apiErrors.badRequest(`QS parameter "billId" missing or malformed`);
  }

  const response = await getConsumption(parsedBillId);

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

export { handler };
