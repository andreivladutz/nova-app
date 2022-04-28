import { getUser } from "../../functions/getUser";
import { createDbWrapper } from "../notionApiWrappers";
import notionCreds from "../notionCreds";
import { filter } from "../notionUtils/filter";
import { Consumption, consumptionKeys } from "../sharedDomain";

// Gets the latest consumption previous to the current bill
const getPreviousConsumption = async (
  latestBillId: number,
  userToken: string
) => {
  const user = await getUser(userToken);

  if (!user) {
    return null;
  }

  const dbWrapper = createDbWrapper<Consumption>(
    notionCreds.token,
    notionCreds.dbId.consumptions
  );

  const latestConsumptions = await dbWrapper
    .filter(filter(consumptionKeys.apartmentNo).number.equals(user.apartmentNo))
    .orderBy(consumptionKeys.date)
    .descending()
    .getN(2);

  // Edge case: there are no consumptions for this user
  if (latestConsumptions.length === 0) {
    return null;
  }

  // If the latest consumption is for the current latest bill
  // then return the previous one
  if (latestConsumptions[0].billId === latestBillId) {
    return latestConsumptions[1] || null;
  }

  // Otherwise, it means that the new consumption for the latest bill
  // was not yet created, and return the latest consumption
  return latestConsumptions[0] || null;
};

export default getPreviousConsumption;
