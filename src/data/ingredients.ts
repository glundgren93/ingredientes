import { Ingredient } from "../models/ingredient.model";

function normalizeIngredients() {
  data.forEach((ingredient) => {
    ingredient.combinations.forEach((combination: string) => {
      const found = data.find((i) => i.name === combination);
      if (found && !found.combinations.includes(ingredient.name)) {
        found.combinations.push(ingredient.name);
      }
    });
  });
}

export const data: Ingredient[] = [
  {
    name: "Frango",
    combinations: ["Alho", "Cogumelo", "Cebola"],
    recipes: [],
  },
  {
    name: "Alho",
    combinations: ["Cebola", "Frango", "Legumes", "Carne"],
    recipes: [],
  },
  {
    name: "Cebola",
    combinations: ["Alho", "Frango", "Legumes", "Carne"],
    recipes: [],
  },
  {
    name: "Coentro",
    combinations: ["Peixe", "Frango", "Sopa", "Caldo"],
    recipes: [],
  },
  {
    name: "Estragão",
    combinations: [
      "Vinagres",
      "Picolés",
      "Saladas verdes",
      "Frutos do mar",
      "Ovos",
      "Frango",
      "Carne",
    ],
    recipes: [],
  },
  {
    name: "Louro",
    combinations: ["Feijão", "Molhos", "Carne"],
    recipes: [],
  },
  {
    name: "Manjericão",
    combinations: ["Molho pesto", "Frango", "Carne", "Peixe"],
    recipes: [],
  },
  {
    name: "Manjerona",
    combinations: ["Molhos vermelhos", "Frango"],
    recipes: [],
  },
  {
    name: "Noz Moscada",
    combinations: [
      "Molhos vermelhos",
      "Molhos brancos",
      "Caldos",
      "Sopas",
      "Carne",
      "Frango",
      "Peixe",
    ],
    recipes: [],
  },
  {
    name: "Orégano",
    combinations: ["Pizza", "Molhos", "Carne", "Frango", "Peixe"],
    recipes: [],
  },
  {
    name: "Salsa",
    combinations: [""], // combina com quase tudo! pensar em uma flag para tal
    recipes: [],
  },
  {
    name: "Salsão",
    alias: "Aipo",
    combinations: [
      "Saladas frias",
      "Sopas",
      "Caldos",
      "Carne",
      "Frango",
      "Peixe",
    ],
    recipes: [],
  },
  {
    name: "Sálvia",
    combinations: ["Carnes brancas", "Molhos"],
    recipes: [],
  },
  {
    name: "Tomilho",
    combinations: ["Carne", "Peixe", "Frango", "Legumes"],
    recipes: [],
  },
  {
    name: "",
    combinations: [],
    recipes: [],
  },
  {
    name: "",
    combinations: [],
    recipes: [],
  },
];
