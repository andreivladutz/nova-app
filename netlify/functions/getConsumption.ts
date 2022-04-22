import { Handler } from "@netlify/functions";
import notionCreds from "../utils/notionCreds";

import { createDbWrapper } from "../utils/notionApiWrappers";
import { filter } from "../utils/notionUtils/filter";
import { Consumption, consumptionKeys } from "../utils/domain/dbsSchema";
import { apiErrors } from "../utils/backEndUtils";
import { plainObjectToNotionObject } from "../utils/notionUtils/schemaObjectMappings";

async function getConsumption(billId: number) {
  const dbWrapper = createDbWrapper(
    notionCreds.token,
    notionCreds.dbId.consumptions
  );

  try {
    // return await dbWrapper.orderBy("dateEmitted").ascending().getFirst();

    // return await dbWrapper
    // .filter(filter(consumptionKeys.billId).number.equals(billId))
    // .getN(10);

    const schema = await dbWrapper.dbSchema();

    return plainObjectToNotionObject<Consumption>(
      {
        name: "foo test",
        indexWC: 1234,
        indexBathroom: 1345,
        indexKitchen: 1345,
        date: new Date().toISOString(),
        confirmed: false,
        total: 100,
        // External key to Users
        apartmentNo: 3,
        // External key to Bills
        billId: 1,
      },
      schema
    );
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
