import { Handler } from "@netlify/functions";
import {
  apiErrors,
  handlerError,
  notionCallWithErrHandling,
  onSuccess,
  QsParamsType,
  server,
  successResult,
} from "../utils/backEndUtils";
import { User, userKeys, ErrorCode } from "../utils/sharedDomain";
import { createDbWrapper } from "../utils/notionApiWrappers";
import notionCreds from "../utils/notionCreds";
import { filter } from "../utils/notionUtils/filter";

const notionToken = notionCreds.token;
const databaseId = notionCreds.dbId.users;

function getUser(token: string) {
  const dbWrapper = createDbWrapper<User>(notionToken, databaseId);

  return dbWrapper.filter(filter(userKeys.token).text.equals(token)).getFirst();
}

export const userNotFoundErr = handlerError(
  apiErrors.notFound("The user was not found", ErrorCode.USER_NOT_FOUND)
);

const handler: Handler = (event) =>
  server
    .get(event, {
      token: {
        type: QsParamsType.string,
        requiredErr: "Token parameter is missing",
        invalidErr: "Token parameter is invalid",
      },
    })
    .then(
      onSuccess((parsedQsParams) =>
        notionCallWithErrHandling(getUser(parsedQsParams.token))
      )
    )
    .then(
      onSuccess(async (user) => {
        if (!user) {
          return userNotFoundErr;
        }

        return successResult(user);
      })
    )
    .then(server.sendResponse);

export { handler, getUser };
