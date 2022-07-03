import { useState } from "react";
import { data } from "./data/ingredients";
import "./App.css";
import { Ingredient } from "./models/ingredient.model";

function App() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>();

  function getCombinationData(combination: string) {
    const result = data.find((ingredient) => ingredient.name === combination);

    if (!result) return null;

    return (
      <div
        onClick={() => {
          setSelectedIngredient(result);
        }}
        className="mb-5 mr-5 border border-gray-400 rounded-lg"
      >
        <h4 className="text-center text-xl mr-3 mb-3">{result?.name}</h4>
        {result?.image ? (
          <img
            className="object-scale-down h-24 w-48 shadow-lg rounded-lg hover:shadow-xl"
            src={result?.image}
          ></img>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen justify-between">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-center font-bold text-3xl mt-5 mb-3">
            🧂🧄 Ingredientes 🧅🥕
          </h1>
          <h2 className="text-center my-2 text-2xl">
            Descubra as combinações dos ingredientes
          </h2>
        </div>

        <input
          name="filter"
          type="text"
          placeholder="Busque seus ingredientes"
          className="p-2 w-2/4 h-8 border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 font-mono "
          onChange={(e) => {
            if (e.target.value.length > 3) {
              const ingredient = data.find((ingredient) =>
                ingredient.name
                  .toLocaleLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setSelectedIngredient(ingredient);
            }
          }}
        ></input>
      </div>
      {selectedIngredient ? (
        <div className="flex flex-col md:flex-row pt-5 2xl:p-2">
          <div className="self-start border-solid border border-gray-400 rounded-lg 2xl:mr-5">
            <h3 className="p-5 text-center text-3xl">
              {selectedIngredient.name}
            </h3>
            <div className="h-48  w-96">
              <img
                className="object-scale-down h-48 w-96 shadow-lg hover:shadow-xl"
                src={selectedIngredient.image}
              ></img>
            </div>
          </div>
          <div className="flex flex-wrap justify-center p-5 2xl:p-0 2xl:justify-start" >
            {selectedIngredient.combinations.map((combination) => {
              return (
                <div key={combination}>{getCombinationData(combination)}</div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div></div>
      <footer className="text-center pb-4">
        <span className="c-brown">Idealizado por </span>
        <a href="https://github.com/glundgren93" target={"_blank"}>
          <strong>glundgren93</strong>
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
