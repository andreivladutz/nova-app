import { Handler } from "@netlify/functions";
import { createDbWrapper } from "../utils/notionApiWrappers";
import notionCreds from "../utils/notionCreds";

const notionToken = notionCreds.token;
const databaseId = notionCreds.dbId.bills;

async function getItem() {
  const dbWrapper = createDbWrapper(notionToken, databaseId);

  try {
    return await dbWrapper.orderBy("dateEmitted").ascending().getFirst();
  } catch (error) {
    console.error(error.body);
  }
}

const handler: Handler = async () => {
  const response = await getItem();

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

export { handler };
