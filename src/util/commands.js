import config from '../config';

const {
  APP_SETTINGS: { PREFIX },
} = config;

export const getFirstCmd = msg => {
  return msg
    .slice(PREFIX.length + 1)
    .split(' ')
    .shift()
    .toLowerCase();
};
