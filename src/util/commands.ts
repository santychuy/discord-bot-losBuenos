import config from '../config';

const { PREFIX } = config;

export const getFirstCmd = (msg: string): string | undefined => {
  const getFirstCmd = msg
    .slice(PREFIX.length + 1)
    .split(' ')
    .shift();

  if (getFirstCmd !== undefined) {
    return getFirstCmd.toLowerCase();
  } else {
    return undefined;
  }
};
