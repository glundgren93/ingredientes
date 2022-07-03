import { Ingredient, IngredientNames } from "../models/ingredient.model";

function normalizeIngredients(data: Ingredient[]) {
  data.forEach((ingredient) => {
    ingredient.combinations.forEach((combination: string) => {
      const found = data.find((i) => i.name === combination);
      if (!found) {
        data.push({
          name: combination,
          combinations: [ingredient.name],
          recipes: [],
        });
      }
      if (found && !found.combinations.includes(ingredient.name)) {
        found.combinations.push(ingredient.name);
      }
    });
  });
  return JSON.stringify(data);
}

export const data: Ingredient[] = [
  {
    name: IngredientNames.FRANGO,
    combinations: [
      IngredientNames.ALHO,
      IngredientNames.COGUMELO,
      IngredientNames.CEBOLA,
      IngredientNames.COENTRO,
      IngredientNames.ESTRAGÃO,
      IngredientNames.MANJERICÃO,
      IngredientNames.MANJERONA,
      IngredientNames.NOZ_MOSCADA,
      IngredientNames.ORÉGANO,
      IngredientNames.SALSÃO,
      IngredientNames.TOMILHO,
      IngredientNames.ALECRIM,
      IngredientNames.AÇAFRÃO,
      IngredientNames.LIMÃO,
    ],
    recipes: [],
    image: "../../images/frango.jpg",
  },
  {
    name: IngredientNames.ALHO,
    combinations: [
      IngredientNames.CEBOLA,
      IngredientNames.FRANGO,
      IngredientNames.LEGUMES,
      IngredientNames.CARNE,
      IngredientNames.PEIXE,
      IngredientNames.ARROZ,
      IngredientNames.SALADAS,
      IngredientNames.MASSAS,
      IngredientNames.PORCO,
    ],
    recipes: [],
    image: "../../images/alho.jpg",
  },
  {
    name: IngredientNames.CEBOLA,
    combinations: [
      IngredientNames.ALHO,
      IngredientNames.FRANGO,
      IngredientNames.LEGUMES,
      IngredientNames.CARNE,
      IngredientNames.OVOS,
      IngredientNames.FEIJÃO,
      IngredientNames.MOLHOS,
      IngredientNames.ARROZ,
      IngredientNames.SALADAS,
      IngredientNames.MASSAS,
      IngredientNames.PORCO,
    ],
    recipes: [],
    image: "../../images/cebola.jpg",
  },
  {
    name: IngredientNames.COENTRO,
    combinations: [
      IngredientNames.PEIXE,
      IngredientNames.FRANGO,
      IngredientNames.SOPAS,
      IngredientNames.CALDOS,
    ],
    recipes: [],
    image: "../../images/coentro.jpg",
  },
  {
    name: IngredientNames.ESTRAGÃO,
    combinations: [
      IngredientNames.VINAGRES,
      IngredientNames.SALADAS_VERDES,
      IngredientNames.FRUTOS_DO_MAR,
      IngredientNames.OVOS,
      IngredientNames.FRANGO,
      IngredientNames.CARNE,
      IngredientNames.PEIXE,
    ],
    recipes: [],
    image: "../../images/estragao.jpg",
  },
  {
    name: IngredientNames.LOURO,
    combinations: [
      IngredientNames.FEIJÃO,
      IngredientNames.MOLHOS,
      IngredientNames.CARNE,
      IngredientNames.PEIXE,
      IngredientNames.MANJERONA,
    ],
    recipes: [],
    image: "../../images/louro.jpg",
  },
  {
    name: IngredientNames.MANJERICÃO,
    combinations: [
      IngredientNames.MOLHO_PESTO,
      IngredientNames.FRANGO,
      IngredientNames.CARNE,
      IngredientNames.PEIXE,
      IngredientNames.OVOS,
      IngredientNames.FEIJÃO,
      IngredientNames.MOLHOS,
      IngredientNames.SÁLVIA,
      IngredientNames.TOMILHO,
      IngredientNames.ALECRIM,
      IngredientNames.MANJERONA,
      IngredientNames.SALADAS,
      IngredientNames.MASSAS,
    ],
    recipes: [],
    image: "../../images/manjericao.jpg",
  },
  {
    name: IngredientNames.MANJERONA,
    combinations: [
      IngredientNames.MOLHOS_VERMELHOS,
      IngredientNames.FRANGO,
      IngredientNames.PEIXE,
      IngredientNames.MOLHOS,
      IngredientNames.ALECRIM,
      IngredientNames.TOMILHO,
      IngredientNames.MANJERICÃO,
      IngredientNames.LOURO,
    ],
    recipes: [],
    image: "../../images/manjerona.jpg",
  },
  {
    name: IngredientNames.NOZ_MOSCADA,
    combinations: [
      IngredientNames.MOLHOS_VERMELHOS,
      IngredientNames.MOLHOS_BRANCOS,
      IngredientNames.CALDOS,
      IngredientNames.SOPAS,
      IngredientNames.CARNE,
      IngredientNames.FRANGO,
      IngredientNames.PEIXE,
    ],
    recipes: [],
    image: "../../images/noz_moscada.jpg",
  },
  {
    name: IngredientNames.ORÉGANO,
    combinations: [
      IngredientNames.MOLHOS,
      IngredientNames.CARNE,
      IngredientNames.FRANGO,
      IngredientNames.PEIXE,
      IngredientNames.MASSAS,
    ],
    recipes: [],
    image: "../../images/oregano.jpg",
  },
  {
    name: "Salsa",
    combinations: [""],
    recipes: [],
    image: "../../images/salsa.jpg",
  },
  {
    name: IngredientNames.SALSÃO,
    alias: "Aipo",
    combinations: [
      IngredientNames.SALADAS_FRIAS,
      IngredientNames.SOPAS,
      IngredientNames.CALDOS,
      IngredientNames.CARNE,
      IngredientNames.FRANGO,
      IngredientNames.PEIXE,
    ],
    recipes: [],
    image: "../../images/aipo.jpg",
  },
  {
    name: IngredientNames.SÁLVIA,
    combinations: [
      IngredientNames.MOLHOS,
      IngredientNames.PEIXE,
      IngredientNames.FEIJÃO,
      IngredientNames.ARROZ,
      IngredientNames.MANJERICÃO,
      IngredientNames.PORCO,
    ],
    recipes: [],
    image: "../../images/salvia.jpg",
  },
  {
    name: IngredientNames.TOMILHO,
    combinations: [
      IngredientNames.CARNE,
      IngredientNames.PEIXE,
      IngredientNames.FRANGO,
      IngredientNames.LEGUMES,
      IngredientNames.OVOS,
      IngredientNames.MOLHOS,
      IngredientNames.MANJERICÃO,
      IngredientNames.PORCO,
    ],
    recipes: [],
    image: "../../images/tomilho.jpg",
  },
  {
    name: IngredientNames.COGUMELO,
    combinations: [IngredientNames.FRANGO],
    recipes: [],
    image: "../../images/cogumelo.jpg",
  },
  {
    name: IngredientNames.LEGUMES,
    combinations: [
      IngredientNames.ALHO,
      IngredientNames.CEBOLA,
      IngredientNames.TOMILHO,
      IngredientNames.ALECRIM,
    ],
    recipes: [],
    image: "../../images/legumes.jpg",
  },
  {
    name: IngredientNames.CARNE,
    combinations: [
      IngredientNames.ALHO,
      IngredientNames.CEBOLA,
      IngredientNames.ESTRAGÃO,
      IngredientNames.LOURO,
      IngredientNames.MANJERICÃO,
      IngredientNames.NOZ_MOSCADA,
      IngredientNames.ORÉGANO,
      IngredientNames.SALSÃO,
      IngredientNames.TOMILHO,
      IngredientNames.ALHO_PORÓ,
    ],
    recipes: [],
    image: "../../images/carne.jpg",
  },
  {
    name: IngredientNames.PEIXE,
    combinations: [
      IngredientNames.COENTRO,
      IngredientNames.MANJERICÃO,
      IngredientNames.NOZ_MOSCADA,
      IngredientNames.ORÉGANO,
      IngredientNames.SALSÃO,
      IngredientNames.TOMILHO,
      IngredientNames.ALECRIM,
      IngredientNames.AÇAFRÃO,
      IngredientNames.SÁLVIA,
      IngredientNames.LOURO,
      IngredientNames.COMINHO,
      IngredientNames.ALHO,
      IngredientNames.MANJERONA,
      IngredientNames.CEBOLINHA,
      IngredientNames.VINAGRES,
      IngredientNames.ESTRAGÃO,
    ],
    recipes: [],
    image: "../../images/peixe.jpg",
  },
  {
    name: IngredientNames.CALDOS,
    combinations: [
      IngredientNames.COENTRO,
      IngredientNames.NOZ_MOSCADA,
      IngredientNames.SALSÃO,
      IngredientNames.CANELA,
    ],
    recipes: [],
    image: "../../images/caldo.jpg",
  },
  {
    name: IngredientNames.VINAGRES,
    combinations: [
      IngredientNames.ESTRAGÃO,
      IngredientNames.PEIXE,
      IngredientNames.SALADAS,
    ],
    recipes: [],
    image: "../../images/vinagres.jpg",
  },
  {
    name: IngredientNames.SALADAS_VERDES,
    combinations: [IngredientNames.ESTRAGÃO],
    recipes: [],
    image: "../../images/salada_verde.jpg",
  },
  {
    name: IngredientNames.FRUTOS_DO_MAR,
    combinations: [IngredientNames.ESTRAGÃO],
    recipes: [],
    image: "../../images/frutos_do_mar.jpg",
  },
  {
    name: IngredientNames.OVOS,
    combinations: [
      IngredientNames.ESTRAGÃO,
      IngredientNames.MANJERICÃO,
      IngredientNames.TOMILHO,
      IngredientNames.CEBOLA,
      IngredientNames.CEBOLINHA,
      IngredientNames.PIMENTÃO,
      IngredientNames.PÁPRICA,
      IngredientNames.SALSINHA,
    ],
    recipes: [],
    image: "../../images/ovos.jpg",
  },
  {
    name: IngredientNames.FEIJÃO,
    combinations: [
      IngredientNames.LOURO,
      IngredientNames.MANJERICÃO,
      IngredientNames.CEBOLA,
      IngredientNames.CEBOLINHA,
      IngredientNames.ALECRIM,
      IngredientNames.SÁLVIA,
      IngredientNames.COMINHO,
    ],
    recipes: [],
    image: "../../images/feijao.jpg",
  },
  {
    name: IngredientNames.MOLHOS,
    combinations: [
      IngredientNames.LOURO,
      IngredientNames.ORÉGANO,
      IngredientNames.SÁLVIA,
      IngredientNames.MANJERICÃO,
      IngredientNames.COMINHO,
      IngredientNames.CEBOLA,
      IngredientNames.CEBOLINHA,
      IngredientNames.ALECRIM,
      IngredientNames.TOMILHO,
      IngredientNames.MANJERONA,
      IngredientNames.CANELA,
    ],
    recipes: [],
    image: "../../images/molhos.jpg",
  },
  {
    name: IngredientNames.MOLHO_PESTO,
    combinations: [IngredientNames.MANJERICÃO],
    recipes: [],
    image: "../../images/molho_pesto.jpg",
  },
  {
    name: IngredientNames.MOLHOS_VERMELHOS,
    combinations: [IngredientNames.MANJERONA, IngredientNames.NOZ_MOSCADA],
    recipes: [],
    image: "../../images/molhos_vermelhos.jpg",
  },

  {
    name: IngredientNames.CALDOS,
    combinations: [IngredientNames.NOZ_MOSCADA, IngredientNames.SALSÃO],
    recipes: [],
    image: "../../images/caldo.jpg",
  },
  {
    name: IngredientNames.SOPAS,
    combinations: [
      IngredientNames.NOZ_MOSCADA,
      IngredientNames.SALSÃO,
      IngredientNames.COENTRO,
      IngredientNames.ALECRIM,
    ],
    recipes: [],
    image: "../../images/sopas.jpg",
  },
  {
    name: IngredientNames.SALADAS_FRIAS,
    combinations: [IngredientNames.SALSÃO],
    recipes: [],
    image: "../../images/salda_fria.jpg",
  },
  {
    name: IngredientNames.ALECRIM,
    combinations: [
      IngredientNames.PEIXE,
      IngredientNames.FRANGO,
      IngredientNames.LEGUMES,
      IngredientNames.MOLHOS,
      IngredientNames.SOPAS,
      IngredientNames.FEIJÃO,
      IngredientNames.BATATAS,
      IngredientNames.MANJERICÃO,
      IngredientNames.SALADAS,
      IngredientNames.PORCO,
      IngredientNames.MANJERONA,
    ],
    recipes: [],
    image: "../../images/alecrim.jpg",
  },
  {
    name: IngredientNames.ALHO_PORÓ,
    combinations: [
      IngredientNames.CARNE,
      IngredientNames.FRANGO,
      IngredientNames.PEIXE,
    ],
    recipes: [],
    image: "../../images/alho_poro.jpg",
  },
  {
    name: IngredientNames.ARROZ,
    combinations: [
      IngredientNames.COMINHO,
      IngredientNames.ALHO,
      IngredientNames.CEBOLA,
      IngredientNames.CEBOLINHA,
      IngredientNames.AÇAFRÃO,
      IngredientNames.SÁLVIA,
    ],
    recipes: [],
    image: "../../images/arroz.jpg",
  },
  {
    name: IngredientNames.AÇAFRÃO,
    alias: "Curcuma",
    combinations: [
      IngredientNames.FRANGO,
      IngredientNames.PEIXE,
      IngredientNames.ARROZ,
      IngredientNames.MASSAS,
    ],
    recipes: [],
    image: "../../images/acafrao.jpg",
  },
  {
    name: IngredientNames.COMINHO,
    combinations: [
      IngredientNames.PEIXE,
      IngredientNames.MOLHOS,
      IngredientNames.ARROZ,
      "Pimenta do reino",
      IngredientNames.FEIJÃO,
    ],
    image: "../../images/cominho.jpg",
  },
  {
    name: IngredientNames.PIMENTA_DO_REINO,
    combinations: [IngredientNames.COMINHO],
    image: "../../images/pimenta_do_reino.jpg",
  },
  {
    name: IngredientNames.CEBOLINHA,
    combinations: [
      IngredientNames.PEIXE,
      IngredientNames.OVOS,
      IngredientNames.FEIJÃO,
      IngredientNames.MOLHOS,
      IngredientNames.ARROZ,
      IngredientNames.BATATAS,
      IngredientNames.SALSINHA,
      IngredientNames.SALADAS,
      IngredientNames.MASSAS,
    ],
    image: "../../images/cebolinha.jpg",
  },
  {
    name: IngredientNames.PIMENTÃO,
    combinations: [IngredientNames.OVOS, IngredientNames.SALADAS],
    image: "../../images/pimentao.jpg",
  },
  {
    name: IngredientNames.PÁPRICA,
    combinations: [IngredientNames.OVOS],
    image: "../../images/paprica.jpg",
  },

  {
    name: IngredientNames.SALSINHA,
    combinations: [
      IngredientNames.OVOS,
      IngredientNames.CEBOLINHA,
      IngredientNames.SALADAS,
      IngredientNames.MASSAS,
    ],
    image: "../../images/salsinha.jpg",
  },
  {
    name: IngredientNames.SALADAS,
    combinations: [
      IngredientNames.MANJERICÃO,
      IngredientNames.VINAGRES,
      IngredientNames.ALHO,
      IngredientNames.CEBOLA,
      IngredientNames.SALSINHA,
      IngredientNames.CEBOLINHA,
      IngredientNames.PIMENTÃO,
      IngredientNames.ALECRIM,
    ],
    image: "../../images/saladas.jpg",
  },
  {
    name: IngredientNames.MASSAS,
    combinations: [
      IngredientNames.MANJERICÃO,
      IngredientNames.AÇAFRÃO,
      IngredientNames.ALHO,
      IngredientNames.CEBOLA,
      IngredientNames.SALSINHA,
      IngredientNames.CEBOLINHA,
      IngredientNames.ORÉGANO,
    ],
    image: "../../images/massas.jpg",
  },
  {
    name: IngredientNames.PORCO,
    combinations: [
      IngredientNames.ALHO,
      IngredientNames.LIMÃO,
      IngredientNames.CEBOLA,
      IngredientNames.ALECRIM,
      IngredientNames.SÁLVIA,
      IngredientNames.TOMILHO,
    ],
    image: "../../images/porco.jpg",
  },
  {
    name: IngredientNames.LIMÃO,
    combinations: [IngredientNames.FRANGO, IngredientNames.PORCO],
    recipes: [],
    image: "../../images/limao.jpg",
  },
  {
    name: IngredientNames.CANELA,
    combinations: [IngredientNames.CALDOS, IngredientNames.MOLHOS],
    image: "../../images/canela.jpg",
  },
  {
    name: IngredientNames.BATATAS,
    combinations: [IngredientNames.ALECRIM, IngredientNames.CEBOLINHA],
    image: "../../images/batata.jpg",
  },
];
