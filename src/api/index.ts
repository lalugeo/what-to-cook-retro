import { Application } from "express";
import * as loggerLib from "./logger";
import RecipeController from "./controllers/recipe.controller";
import { RecipeInterface } from "./models/recipe.model";

export function routes(app: Application): void {
  app.get('/recipes', async (req, res) => {
    const recipes = await RecipeController.getRecipes();
    res.send(recipes);
  });

  app.post('/recipes', async (req, res) => {
    const recipeName = req.body.name;
    const newRecipe = await RecipeController.createRecipe(recipeName);
    res.send(newRecipe);
  });

}