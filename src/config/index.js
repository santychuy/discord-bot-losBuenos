require('dotenv').config();

export default {
  APP_SETTINGS: {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    PREFIX: process.env.PREFIX,
  },
};
