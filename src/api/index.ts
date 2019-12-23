import * as loggerLib from "./logger";
const logger = loggerLib.createLogger('api');
export function a(): string {
  logger.info('someone called me');
  return 'Hello';
}