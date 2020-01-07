import Recipe, { RecipeInterface} from "../models/recipe.model";
export async function createRecipe(name: string): Promise<RecipeInterface>{
  return await Recipe.create({
    name
  });
}

export default {
  createRecipe
};