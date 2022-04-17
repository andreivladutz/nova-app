// Pick the environment variables needed for notion access
export default {
  token: process.env.NOTION_TOKEN,
  // The dbId of each accessed and used notion db
  dbId: {
    bills: process.env.NOTION_BILLS_DB_ID,
    users: process.env.NOTION_USERS_DB_ID,
    consumptions: process.env.NOTION_CONSUMPTIONS_DB_ID,
  },
};
