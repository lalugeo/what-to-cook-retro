import * as winston from "winston";
import { Format } from "logform";

export const LOG_DIR = process.env.LOG_DIR || 'logs';

function getPrettyFormat(libName: string): Format {
  return winston.format.printf(({ level, message }) => `${new Date().toISOString()} [${libName}] ${level}: ${message}`);
}

function getPrettyLogger(libName: string): winston.Logger {
  return winston.createLogger({
    level: process.env.LOG_LEVEL || 'info', // all possible levels are error, warn, info, verbose, debug and silly
    format: getPrettyFormat(libName),
    transports: [
      new winston.transports.File({ filename: `${LOG_DIR}/error.log`, level: 'error' }),
      new winston.transports.File({ filename: `${LOG_DIR}/output.log`, level: 'info' }),
      new winston.transports.File({ filename: `${LOG_DIR}/trace.log`, level: 'debug' }),
      new winston.transports.Console(),
    ]
  });
}

export function createLogger(libName: string): winston.Logger {
  return getPrettyLogger(libName);
}
