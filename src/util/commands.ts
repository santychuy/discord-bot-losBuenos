import config from '../config';

const { PREFIX } = config;

export const getFirstCmd = (msg: string): string => {
  return msg
    .slice(PREFIX.length + 1)
    .split(' ')
    .shift()!
    .toLowerCase();
};
