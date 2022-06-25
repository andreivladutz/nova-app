const ERR_PREFIX = "NOTION CREDENTIALS MISSING: ";
const assureDefined = (
  str: string | undefined,
  credentialName: string
): str is string => {
  if (!str) {
    throw new Error(`${ERR_PREFIX}${credentialName} is not defined!`);
  }

  return true;
};

// Pick the environment variables needed for notion access
const getNotionCreds = () => {
  const { env } = process;
  const {
    NOTION_TOKEN,
    NOTION_BILLS_DB_ID,
    NOTION_USERS_DB_ID,
    NOTION_CONSUMPTIONS_DB_ID,
  } = env;

  if (
    assureDefined(NOTION_TOKEN, "NOTION_TOKEN") &&
    assureDefined(NOTION_BILLS_DB_ID, "NOTION_BILLS_DB_ID") &&
    assureDefined(NOTION_USERS_DB_ID, "NOTION_USERS_DB_ID") &&
    assureDefined(NOTION_CONSUMPTIONS_DB_ID, "NOTION_CONSUMPTIONS_DB_ID")
  ) {
    return {
      token: NOTION_TOKEN,
      // The dbId of each accessed and used notion db
      dbId: {
        bills: NOTION_BILLS_DB_ID,
        users: NOTION_USERS_DB_ID,
        consumptions: NOTION_CONSUMPTIONS_DB_ID,
      },
    };
  }

  return {
    token: "",
    dbId: {
      bills: "",
      users: "",
      consumptions: "",
    },
  };
};

const notionCreds = getNotionCreds();

export default notionCreds;
