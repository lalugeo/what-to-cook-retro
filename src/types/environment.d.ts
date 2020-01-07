declare namespace NodeJS {
  export interface ProcessEnv {
    DB_HOST: string;
    DB_USER: string;
    DB_PW: string;
    DB_CONNECTION_TIMEOUT: string;
    DB_NAME: string;
    PORT: string;
  }
}