declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    DISCORD_TOKEN: string;
    PREFIX: string;
  }
}
