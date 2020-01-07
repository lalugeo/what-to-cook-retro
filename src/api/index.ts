import * as loggerLib from "./logger";
import RecipeController from "./controllers/recipe.controller";

const logger = loggerLib.createLogger('api');
export async function a() {
  await RecipeController.createRecipe('tandoori');
  logger.info('recipe created');
}