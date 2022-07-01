import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="text-center font-bold text-3xl mt-5 mb-3">
            🧂🧄 Ingredientes 🧅🥕
          </h1>
          <h2 className="text-center my-2 text-2xl c-yellow">
            Descubra as combinações dos ingredientes!
          </h2>
        </div>

        <input
          name="filter"
          type="text"
          placeholder="Busque seus ingredientes"
          className="p-2 w-2/4 h-8 border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 font-mono "
          onChange={(e) => {
            e.stopPropagation();
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
