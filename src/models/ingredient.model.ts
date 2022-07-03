import { Recipe } from "./recipes.model";

export enum IngredientNames {
  "FRANGO" = "Frango",
  "ALHO" = "Alho",
  "CEBOLA" = "Cebola",
  "COENTRO" = "Coentro",
  "ESTRAGÃO" = "Estragão",
  "LOURO" = "Louro",
  "MANJERICÃO" = "Manjericão",
  "MANJERONA" = "Manjerona",
  "NOZ_MOSCADA" = "Noz Moscada",
  "ORÉGANO" = "Orégano",
  "SALSA" = "Salsa",
  "SALSÃO" = "Salsão",
  "SÁLVIA" = "Sálvia",
  "TOMILHO" = "Tomilho",
  "COGUMELO" = "Cogumelo",
  "LEGUMES" = "Legumes",
  "CARNE" = "Carne",
  "PEIXE" = "Peixe",
  "CALDO" = "Caldo",
  "VINAGRES" = "Vinagres",
  "PICOLÉS" = "Picolés",
  "SALADAS_VERDES" = "Saladas verdes",
  "FRUTOS_DO_MAR" = "Frutos do mar",
  "OVOS" = "Ovos",
  "FEIJÃO" = "Feijão",
  "MOLHOS" = "Molhos",
  "MOLHO_PESTO" = "Molho pesto",
  "MOLHOS_VERMELHOS" = "Molhos vermelhos",
  "MOLHOS_BRANCOS" = "Molhos brancos",
  "CALDOS" = "Caldos",
  "SOPAS" = "Sopas",
  "PIZZA" = "Pizza",
  "SALADAS_FRIAS" = "Saladas frias",
  "CARNES_BRANCAS" = "Carnes brancas",
  "ALECRIM" = "Alecrim",
  "ALHO_PORÓ" = "Alho Poró",
  "CEBOLINHA" = "Cebolinha",
  "ARROZ" = "Arroz",
  "COMINHO" = "Cominho",
  "AÇAFRÃO" = "Açafrão",
  "PIMENTÃO" = "Pimentão",
  "PÁPRICA" = "Páprica",
  "SALSINHA" = "Salsinha",
  "SALADAS" = "Saladas",
  "MASSAS" = "Massas",
  "BATATAS" = "Batatas",
  "CANELA" = "Canela",
  "PIMENTA_DO_REINO" = "Pimenta do reino",
  "LIMÃO" = "Limão",
  "PORCO" = "Porco",
}

export interface Ingredient {
  name: string;
  alias?: string;
  image: string;
  combinations: string[];
  recipes?: Recipe[];
}
