import React, { useState } from "react";

export const FirstComponent = () => {
  //let nombre = "Samuel";
  let web = "Samuelweb.es";

  const [nombre, setNombre] = useState("Samuel");

  let cursos = [
    "Master en HTML",
    "Master en java",
    "Master en python",
    "Master en machine learning",
  ];

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };
  return (
    <div>
      <h1>Mi Primer Componente</h1>
      <p> Este es un texto en el primer componente</p>
      <p>Mi nombre es: {nombre}</p>
      <p>Mi web es: {web}</p>

      <input
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder
      />

      <button onClick={(e) => cambiarNombre("S.Antunez WEB")}>
        Cambiar nombre
      </button>

      <ul>
        {cursos.map((curso, indice) => {
          return <li key={indice}>{curso}</li>;
        })}
      </ul>
    </div>
  );
};
