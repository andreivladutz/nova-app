import { Handler } from "@netlify/functions";
import { notionCallWithErrHandling } from "../utils/backEndUtils";
import { User } from "../utils/domain/dbsSchema";
import { createDbWrapper } from "../utils/notionApiWrappers";
import notionCreds from "../utils/notionCreds";
import { filter } from "../utils/notionUtils/filter";

const notionToken = notionCreds.token;
const databaseId = notionCreds.dbId.users;

function getItem() {
  const dbWrapper = createDbWrapper<User>(notionToken, databaseId);

  // return await dbWrapper.orderBy("dateEmitted").ascending().getFirst();

  return dbWrapper
    .filter(filter("token").text.contains(""))
    .orderBy("name")
    .ascending()
    .getN(10);
}

const handler: Handler = async () => {
  const response = await notionCallWithErrHandling(getItem());

  if (response.success === false) {
    return response.error;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(response.result),
  };
};

export { handler };
