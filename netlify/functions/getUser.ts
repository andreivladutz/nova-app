import { Handler } from "@netlify/functions";
import { createDbWrapper } from "../utils/notionApiWrappers";
import notionCreds from "../utils/notionCreds";
import { filter } from "../utils/notionUtils";

const notionToken = notionCreds.token;
const databaseId = notionCreds.dbId.users;

async function getItem() {
  const dbWrapper = createDbWrapper(notionToken, databaseId);

  try {
    // return await dbWrapper.orderBy("dateEmitted").ascending().getFirst();

    return await dbWrapper
      .filter(filter("token").text.contains(""))
      .orderBy("name")
      .ascending()
      .getN(10);
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
