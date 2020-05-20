import { config } from 'dotenv';
config();

export default {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  PREFIX: process.env.PREFIX,
};
