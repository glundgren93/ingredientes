import { Recipe } from "./recipes.model";

export interface Ingredient {
  name: string;
  alias?: string;
  image?: string;
  combinations: string[];
  recipes: Recipe[];
}
